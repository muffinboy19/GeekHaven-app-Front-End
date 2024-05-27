// app/_layout.js
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LandingPage from './LandingPage';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

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
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
          </>
        )}
      </Stack.Navigator>
  );
};

export default Layout;
