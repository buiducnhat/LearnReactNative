import React from 'react';
import {Button, Layout, Text} from '@ui-kitten/components';

import {selectThemeType, setThemeType} from '@/features/app/app.slice';
import {useAppDispatch, useAppSelector} from '@/hooks/redux.hook';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  const themeType = useAppSelector(selectThemeType);

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">Settings</Text>
      <Button
        onPress={() =>
          dispatch(setThemeType(themeType === 'light' ? 'dark' : 'light'))
        }>
        Toggle
      </Button>
    </Layout>
  );
};

export default SettingsScreen;
