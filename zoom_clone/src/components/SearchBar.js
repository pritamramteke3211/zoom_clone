import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FntIcon from 'react-native-vector-icons/Fontisto';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <FntIcon name="search" size={20} color="#858585" />
      <Text style={styles.textSearchBar}>Search</Text>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
  },
  textSearchBar: {
    color: '#858585',
    paddingLeft: 10,
    fontSize: 20,
  },
});
