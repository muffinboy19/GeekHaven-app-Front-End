// app/_layout.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LandingPage from './LandingPage';
import HomeScreen from './HomeScreen';
import ProjectScreen from './ProjectScreen';
import AddProjectScreen from './AddProjectScreen';
import DetailsScreen from './DetailsScreen';
import CommunityScreen from './CommunityScreen';
import FeedPage from './FeedPage';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack.Navigator initialRouteName={isLoading ? 'SplashScreen' : 'LandingPage'}>
        {isLoading ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="FeedPage" component={FeedPage} />
            <Stack.Screen name="ProjectScreen" component={ProjectScreen} />
            <Stack.Screen name="AddProjectScreen" component={AddProjectScreen} />
            <Stack.Screen name="CommunityScreen" component={CommunityScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            
          </>
        )}
      </Stack.Navigator>
  );
};

export default Layout;
