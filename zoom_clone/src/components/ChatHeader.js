import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EnIcon from 'react-native-vector-icons/Entypo'

const ChatHeader = ({setmodalVisible}) => {
  return (
    <View style={styles.container}>
      <Pressable
    onPress={()=> setmodalVisible(false)}  
    >
        <Text style={styles.buttonText}>Close</Text>
      </Pressable>
      <Text style={styles.heading}>Chat</Text>
      <EnIcon name='bell' size={25} color="#efefef" />
    </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    heading:{
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonText:{
        color: 'white',
        fontSize: 20
    }
})