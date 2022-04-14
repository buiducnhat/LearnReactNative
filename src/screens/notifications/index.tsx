import React from 'react';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {TabBar, Tab} from '@ui-kitten/components';

import {routes} from '@/configs/routes.config';
import ApartmentNotiScreen from './apartment-noti.screen';
import GeneralNotiScreen from './general-noti.screen';
import NotificationTopBar from './components/notification-topbar';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const TopNavigator = ({navigation, state}: MaterialTopTabBarProps) => (
  <TabBar
    indicatorStyle={{display: 'none'}}
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab style={{paddingVertical: 8}} title={routes.generalNoti} />
    <Tab style={{paddingVertical: 8}} title={routes.apartmentNoti} />
  </TabBar>
);

const NotificationsScreen = () => {
  return (
    <>
      <NotificationTopBar />

      <Navigator tabBar={props => <TopNavigator {...props} />}>
        <Screen name={routes.generalNoti} component={GeneralNotiScreen} />
        <Screen name={routes.apartmentNoti} component={ApartmentNotiScreen} />
      </Navigator>
    </>
  );
};

export default NotificationsScreen;
