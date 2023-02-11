import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EnIcon from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <View style={styles.container}>
      <EnIcon name="notification" size={30} color={'#efefef'} />
      <Text style={styles.heading}>Meet & Chat</Text>
      <EnIcon name="new-message" size={30} color={'#efefef'} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  heading: {
    color: '#efefef',
    fontSize: 20,
    fontWeight: 700,
  },
});
