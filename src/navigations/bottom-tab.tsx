import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  IconProps,
} from '@ui-kitten/components';
import {routes} from '@/configs/routes.config';
import HomeScreen from '@/screens/home/home.screen';
import SettingsScreen from '@/screens/settings';
import ProfileScreen from '@/screens/profile';
import TodoScreen from '@/screens/todo';

const BottomStack = createBottomTabNavigator();

const HomeIcon = (props: IconProps) => <Icon {...props} name="home-outline" />;

const ProfileIcon = (props: IconProps) => (
  <Icon {...props} name="person-outline" />
);

const TodoIcon = (props: IconProps) => (
  <Icon {...props} name="layers-outline" />
);

const SettingsIcon = (props: IconProps) => (
  <Icon {...props} name="settings-outline" />
);

const BottomTabBar = ({navigation, state}: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Home" icon={HomeIcon} />
    <BottomNavigationTab title="Todo" icon={TodoIcon} />
    <BottomNavigationTab title="Profile" icon={ProfileIcon} />
    <BottomNavigationTab title="Settings" icon={SettingsIcon} />
  </BottomNavigation>
);

const BottomTabNavigator = () => (
  <BottomStack.Navigator
    screenOptions={{headerShown: false}}
    tabBar={props => <BottomTabBar {...props} />}>
    <BottomStack.Screen name={routes.home} component={HomeScreen} />
    <BottomStack.Screen name={routes.todo} component={TodoScreen} />
    <BottomStack.Screen name={routes.profile} component={ProfileScreen} />
    <BottomStack.Screen name={routes.settings} component={SettingsScreen} />
  </BottomStack.Navigator>
);

export default BottomTabNavigator;
