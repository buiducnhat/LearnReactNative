import React from 'react';
import {Button, Layout, Text, Toggle} from '@ui-kitten/components';

import {selectThemeType, setThemeType} from '@/features/app/app.slice';
import {useAppDispatch, useAppSelector} from '@/hooks/redux.hook';
import {authActions} from '@/features/auth/auth.slice';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  const themeType = useAppSelector(selectThemeType);

  const onPressLogoutButton = () => {
    dispatch(authActions.logout());
  };

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">Settings</Text>
      <Toggle
        checked={themeType === 'dark'}
        onChange={() =>
          dispatch(setThemeType(themeType === 'light' ? 'dark' : 'light'))
        }>
        {themeType === 'light' ? 'Light theme' : 'Dark theme'}
      </Toggle>

      <Button onPress={onPressLogoutButton}>Logout</Button>
    </Layout>
  );
};

export default SettingsScreen;
