import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

import {routes} from '@/configs/routes.config';
import BottomTabNavigator from './bottom-tab';
import AuthNavigator from './auth-navigator';
import useCheckAuth from '@/hooks/useCheckAuth';
import {useAppDispatch} from '@/hooks/redux.hook';
import {authActions} from '@/features/auth/auth.slice';

const MyNavigationContainer = () => {
  const Stack = createNativeStackNavigator();

  const dispatch = useAppDispatch();

  const {isAuthenticated, currentUser, isPendingGetMe} = useCheckAuth();

  const onStateChange = () => {
    (!isAuthenticated || !currentUser) && dispatch(authActions.getMe());
  };

  React.useEffect(() => {
    setTimeout(() => {
      !isPendingGetMe && SplashScreen.hide();
    }, 100);
  }, [isPendingGetMe]);

  return (
    <NavigationContainer onStateChange={onStateChange}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAuthenticated ? (
          <Stack.Screen name={routes.main} component={BottomTabNavigator} />
        ) : (
          <Stack.Screen name={routes.auth} component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyNavigationContainer;
