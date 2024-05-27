import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavBar = () => {
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigateToScreen('FeedPage')}
      >
        <FontAwesome name="home" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigateToScreen('ProjectScreen')}
      >
        <FontAwesome name="briefcase" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.middleIconContainer}
        onPress={() => navigateToScreen('AddProjectScreen')}
      >
        <FontAwesome name="plus" size={24} color="black" style={styles.middleIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigateToScreen('CommunityScreen')}
      >
        <FontAwesome name="users" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => navigateToScreen('ProfileScreen')}
      >
        <FontAwesome name="user" size={24} color="black" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#080A0F', // Slightly darker background color
    shadowColor: 'black', // Shadow color
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 5, // Shadow radius
    elevation: 5, // Android shadow elevation
  },
  iconContainer: {
    padding: 10,
  },
  icon: {
    color: '#848A94', // Default color of the icons
  },
  middleIconContainer: {
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 50,
  },
  middleIcon: {
    color: '#3580FF', // Color of the middle icon
  },
});

export default BottomNavBar;
