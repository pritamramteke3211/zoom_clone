import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import MenuButtons from '../components/MenuButtons';
import ContactMenu from '../components/ContactMenu';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{height: '100%'}}>
        <Header />
        <SearchBar />
        <MenuButtons navigation={navigation} />
        <ContactMenu />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 15,
  },
});
