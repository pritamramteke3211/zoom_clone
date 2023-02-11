import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const items = [
  {
    id: 1,
    name: 'video-camera',
    title: 'New Meeting',
    customColor: '#ff751f',
  },
  {
    id: 2,
    name: 'plus-square',
    title: 'New Meeting',
  },
  {
    id: 3,
    name: 'calendar',
    title: 'Schedule',
  },
  {
    id: 4,
    name: 'upload',
    title: 'Share Screen',
  },
];

const MenuButtons = ({navigation}) => {
  const openMeeting = () => {
    navigation.navigate('Room');
  };
  return (
    <View style={styles.container}>
      {items.map((itm, idx) => {
        return (
          <View style={styles.buttonContainer} key={idx}>
            <TouchableOpacity
              onPress={() => openMeeting()}
              style={{
                ...styles.button,
                backgroundColor: itm.customColor ? itm.customColor : '#0470DC',
              }}>
              <FAIcon name={itm.name} size={23} color="#efefef" />
            </TouchableOpacity>
            <Text style={styles.menuText}>{itm.title}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MenuButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingBottom: 10,
    borderBottomColor: '#1F1F1F',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignItems: 'center',
    flex: 1,
  },
  button: {
    width: 50,
    height: 50,
    // backgroundColor:'blue',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuText: {
    fontWeight: '600',
    color: '#858585',
    fontSize: 12,
    paddingTop: 10,
  },
});
