import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="bars" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        {/* Add your sample text */}
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="bell" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  iconContainer: {
    padding: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default TopBar;
