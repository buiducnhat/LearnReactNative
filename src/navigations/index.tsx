import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '@/configs/routes.config';
import BottomTabNavigator from './bottom-tab';
import AuthNavigator from './auth-navigator';

const MyNavigationContainer = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {true ? (
          <Stack.Screen name={routes.main} component={BottomTabNavigator} />
        ) : (
          <Stack.Screen name={routes.auth} component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigationContainer;
