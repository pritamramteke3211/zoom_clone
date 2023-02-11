import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, Children} from 'react';
import StartMeeting from '../components/StartMeeting';
import {io} from 'socket.io-client';

let socket;

const MeetingRoom = () => {
  const [name, setname] = useState('');
  const [roomId, setroomId] = useState('');

  const [activeUsers, setactiveUsers] = useState([]);
  const [startCamera, setstartCamera] = useState(false);

  const startCameraFunc = async () => {
    // const cameraPermission = await Camera.requestCameraPermissionsAsync()
    // console.log("cameraPermission",cameraPermission);
  };

  const joinRoom = () => {
    startCameraFunc();
    socket.emit('join-room', {roomId: roomId, userName: name});
  };

  useEffect(() => {
    const API_URL = 'http://192.168.251.248:3001';
    socket = io(`${API_URL}`);
    socket.on('connection', () => console.log('connected'));
    socket.on('all-users', users => {
      console.log('Active Users', users);
      setactiveUsers(users);
    });
  }, []);

  return (
    <View style={styles.container}>
      {startCamera ? (
        <Text>Start Camera</Text>
      ) : (
        <StartMeeting
          name={name}
          setname={setname}
          roomId={roomId}
          setroomId={setroomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1c1c',
    flex: 1,
  },
});
