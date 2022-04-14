import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabBar, Tab} from '@ui-kitten/components';

import {routes} from '@/configs/routes.config';
import ApartmentNotiScreen from './apartment-noti.screen';
import GeneralNotiScreen from './general-noti.screen';
import NotificationTopBar from './components/notification-topbar';
import NotiDetailScreen from './noti-detail.screen';

const {Navigator, Screen} = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const TopNavigator = ({navigation, state}: MaterialTopTabBarProps) => (
  <TabBar
    indicatorStyle={{display: 'none'}}
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab style={{paddingVertical: 8}} title={routes.generalNoti} />
    <Tab style={{paddingVertical: 8}} title={routes.apartmentNoti} />
  </TabBar>
);

const GeneralNotiStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={routes.generalNoti} component={GeneralNotiScreen} />
    <Stack.Screen name={routes.notiDetail} component={NotiDetailScreen} />
  </Stack.Navigator>
);

const ApartmentNotiStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={routes.apartmentNoti} component={ApartmentNotiScreen} />
    <Stack.Screen name={routes.notiDetail} component={NotiDetailScreen} />
  </Stack.Navigator>
);

const NotificationsScreen = () => {
  return (
    <>
      <NotificationTopBar />

      <Navigator tabBar={props => <TopNavigator {...props} />}>
        <Screen
          name={`${routes.generalNoti}-stack`}
          component={GeneralNotiStack}
        />
        <Screen
          name={`${routes.apartmentNoti}-stack`}
          component={ApartmentNotiStack}
        />
      </Navigator>
    </>
  );
};

export default NotificationsScreen;
