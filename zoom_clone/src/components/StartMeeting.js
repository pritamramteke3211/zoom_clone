import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const StartMeeting = ({name, setname, roomId, setroomId, joinRoom}) => {
  return (
    <View>
      <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Name"
            placeholderTextColor="#767476"
            value={name}
            onChangeText={text => setname(text)}
          />
        </View>
        <View style={styles.info}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter Room Id"
            placeholderTextColor="#767476"
            value={roomId}
            onChangeText={text => setroomId(text)}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => joinRoom()}
            style={styles.startMeetingButton}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Start Meeting
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  startMeetingContainer: {},
  info: {
    width: '100%',
    backgroundColor: '#373538',
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#484648',
    // padding: 12,
    justifyContent: 'center',
  },
  textInput: {
    color: 'white',
    fontSize: 18,
  },
  startMeetingButton: {
    width: 350,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0470DC',
    height: 50,
    borderRadius: 15,
  },
});
