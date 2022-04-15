import React from 'react';
import {Button, Layout, Text, Toggle} from '@ui-kitten/components';

import {selectThemeType, setThemeType} from '@/features/app/app.slice';
import {useAppDispatch, useAppSelector} from '@/hooks/redux.hook';
import {authActions} from '@/features/auth/auth.slice';
import SettingsTopBar from './components/settings-top-bar';
import {StyleSheet, View} from 'react-native';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  const themeType = useAppSelector(selectThemeType);

  const onPressLogoutButton = () => {
    dispatch(authActions.logout());
  };

  return (
    <Layout style={styles.container}>
      <SettingsTopBar />

      <View style={{flex: 1, width: '100%'}}>
        <View style={styles.itemContainer}>
          <Text category="h6">Theme</Text>
          <Toggle
            checked={themeType === 'dark'}
            onChange={() =>
              dispatch(setThemeType(themeType === 'light' ? 'dark' : 'light'))
            }>
            {themeType === 'light' ? 'Light' : 'Dark'}
          </Toggle>
        </View>

        <View style={styles.itemContainer}>
          <Text category="h6">Help</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text category="h6">About</Text>
        </View>
      </View>

      <Button onPress={onPressLogoutButton}>Logout</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 12,
  },
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
});

export default SettingsScreen;
