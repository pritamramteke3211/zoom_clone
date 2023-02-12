import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import FAIcon from 'react-native-vector-icons/FontAwesome'

const Chat = ({
    modalVisible,
    setmodalVisible,
}) => {

    const [messageText, setmessageText] = useState("")

  return (
    <View style={styles.container}>
        <SafeAreaView style={{height: '100%'}}>
            {/* <KeyboardAvoidingView
            behavior={Platform.OS === 'ios'? 'padding' : 'height'}
            // style={{flex: 1}}
            > */}
            <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            >
            <View style={{flex: 1}}>
            <ChatHeader setmodalVisible={setmodalVisible}/>
            {/* Chat Messages */}
            <View style={styles.chatMessage}>

            </View>
            {/* Type Messages */}
            <View style={styles.chatFormContainer}>
                <Text style={{color: 'white'}} >Send to: Everyone</Text>
                <View style={styles.chatForm}>
                    <TextInput
                    value={messageText}
                    onChangeText={val=> setmessageText(val)}
                    style={styles.textInput}
                    placeholder="Tap here to chat"
                    placeholderTextColor='#595859'
                    />
                    <TouchableOpacity
                        style={{...styles.button, backgroundColor: messageText ? "#0B71EB": '#373838'}}
                    >
                        <FAIcon name={"send"} size={18} color="#efefef" />
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            </TouchableWithoutFeedback>
            {/* </KeyboardAvoidingView> */}
        </SafeAreaView>
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1c1c1c',
    },
    chatFormContainer:{
        borderColor: '#2f2f2f',
        borderTopWidth: 1,
        padding: 12
    },
    textInput:{
        height: 40,
        color: '#efefef',
        borderColor: '#595859',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 12,
        flex: 1, // To expand textinput fully as possible
    },
    chatForm:{
        flexDirection: 'row',
    },
    chatMessage:{
        flex: 1,
    },
    button:{
        height: 40,
        width: 40,
        marginTop: 12,
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
})