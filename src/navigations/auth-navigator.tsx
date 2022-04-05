import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from '@/configs/routes.config';
import LoginScreen from '@/screens/auth/login.screen';
import RegisterScreen from '@/screens/auth/register.screen';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.login} component={LoginScreen} />
      <Stack.Screen name={routes.register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
