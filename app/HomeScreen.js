import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import TopBar from '../components/TopBar'; // Adjust import path
import BottomNavBar from '../components/BottomNavBar';

const HomeScreen = () => {
  return (
    <ImageBackground source={require('../assets/images/homeScreenBackground.png')} style={styles.background}>
      <TopBar />
      <View style={styles.content}>
      </View>
      <BottomNavBar />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sampleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
