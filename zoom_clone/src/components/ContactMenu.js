import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ADIcon from 'react-native-vector-icons/AntDesign';

const contactsMenuButtons = [
  {
    type: 'starred',
    name: 'Starred',
  },

  {
    type: 'contact',
    name: 'Nazariy Dumanskyy',
    photo: require('../assets/images/per1.jpg'),
  },
  {
    type: 'contact',
    name: 'Jessy The',
    photo: require('../assets/images/per2.jpg'),
  },
  {
    type: 'contact',
    name: 'Rafeh Qazi',
    photo: require('../assets/images/per3.jpg'),
  },
];

const ContactMenu = () => {
  return (
    <View style={styles.container}>
      {/* Contact Container */}
      {contactsMenuButtons.map((contact, idx) => {
        return (
          <View style={styles.row} key={idx}>
            {/* Image */}

            {contact.type == 'starred' ? (
              <View style={styles.starredIcon}>
                <ADIcon name="star" size={30} color="#efefef" />
              </View>
            ) : (
              <Image source={contact.photo} style={styles.image} />
            )}
            {/* Text */}
            <Text style={styles.text}>{contact.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ContactMenu;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  starredIcon: {
    backgroundColor: '#333333',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
