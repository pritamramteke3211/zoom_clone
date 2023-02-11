import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect, Children, useLayoutEffect} from 'react';
import StartMeeting from '../components/StartMeeting';
import {io} from 'socket.io-client';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import FAIcon from 'react-native-vector-icons/FontAwesome'

let socket;

const menuIcons = [
  {
    id: 1,
    name: 'microphone',
    title: 'Mute',
    customColor: '#efefef',
  },
  {
    id: 2,
    name: 'video-camera',
    title: 'Stop Video',
  },
  {
    id: 3,
    name: 'upload',
    title: 'Share Content',
  },
  {
    id: 4,
    name: 'group',
    title: 'Participants',
  },
]

const MeetingRoom = () => {
  const [name, setname] = useState('');
  const [roomId, setroomId] = useState('');

  const [activeUsers, setactiveUsers] = useState([]);
  const [startCamera, setstartCamera] = useState(false);

  const devices = useCameraDevices();
  const device = devices.back

  const startCameraFunc = async () => {
    // const cameraPermission = await Camera.getCameraPermissionStatus()
    // console.log("cameraPermission",cameraPermission);

    const newCameraPermission = await Camera.requestCameraPermission();

    console.log('newCameraPermission', newCameraPermission);

    if (newCameraPermission == 'authorized') {
      setstartCamera(true);
    } else {
      Alert.alert('Access denied');
    }

  };

  const joinRoom = () => {
    startCameraFunc();
    console.log("name1",name)
    socket.emit('join-room', {roomId: roomId, userName: name}); 
    // socket.emit('room', {roomId: 'ree'}); 

  };

  useLayoutEffect(() => {
  
    const API_URL = 'http://192.168.1.65:3001';
    socket = io(`${API_URL}`);
    socket.on('connection', () => console.log('connected'));
    socket.on('all-users', users_data => {
      console.log('Active Users', users_data);
      users = users_data.users.filter(user => (user.userName != users_data.log_user))
      console.log("users",users)
      setactiveUsers(users);
    });
  }, []);
  


  return (
    <View style={styles.container}>
      {startCamera ? (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.activeUsersContainer}>
          {/* We gave cameraContainer styles flex:1 to take much space as possible */}
         <View 
          style={styles.cameraContainer}
           > 
          {device == null ? (
            <Text> Loading... </Text>
          ) : (
           
            <Camera
              style={{
                width: activeUsers.length == 0 ? '100%': 185, 
                height: activeUsers.length == 0 ? 400 : 185
              }}
              device={device}
              isActive={true}
            />
         
          )}
          {
            activeUsers.length > 0 && activeUsers.map((user, index)=>{
              return(
              <View key={index} style={styles.activeUserContainer}>
                  <Text style={{color:'white'}}>{user.userName}</Text>
              </View>
              )
            })
          }
             </View>
             </View>
          {/* Footer */}
          <View style={styles.menu}>
              { menuIcons.map((itm,idx)=>{
                return(
                <TouchableOpacity style={styles.tile} key={idx}>
                <FAIcon name={itm.name} size={24} color={'#efefef'} />
                <Text style={styles.textTile} >{itm.title}</Text>
              </TouchableOpacity>)
              }) 
                
              }
          </View>
        </SafeAreaView>
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
  menu:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  tile:{
    justifyContent:'center',
    alignItems:'center',
    height: 50,
    marginTop: 15,
  },
  textTile: {
    color:'white',
    marginVertical: 10,
  },
  cameraContainer:{
    // flex: 1,
    // backgroundColor:'#000',
    justifyContent:'center',
    flexDirection:'row',
    flexWrap:'wrap',
  },
  activeUsersContainer:{
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'black',
  },
  activeUserContainer:{
    borderColor: 'gray',
    borderWidth: 1,
    width: 185,
    height: 185,
    justifyContent:'center',
    alignItems: 'center',
  },
});
