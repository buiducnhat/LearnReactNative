import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

import useCheckAuth from '@/hooks/useCheckAuth';
import {useAppDispatch} from '@/hooks/redux.hook';
import {authActions} from '@/features/auth/auth.slice';
import ProfileTopBar from './components/profile-top-bar';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  const {isAuthenticated, currentUser} = useCheckAuth();

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      (!isAuthenticated || !currentUser) && dispatch(authActions.getMe());
    });

    return unsubscribe;
  }, [currentUser, dispatch, isAuthenticated, navigation]);

  return (
    <Layout style={styles.container} level="1">
      <ProfileTopBar />

      <Text category="h6">{currentUser?.name}</Text>
      <Avatar size="giant" source={{uri: currentUser?.avatar}} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ProfileScreen;
