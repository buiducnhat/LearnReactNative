import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

import useCheckAuth from '@/hooks/useCheckAuth';
import {useAppDispatch} from '@/hooks/redux.hook';
import {authActions} from '@/features/auth/auth.slice';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  const {currentUser} = useCheckAuth();
  console.log(currentUser);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(authActions.getMe());
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  return (
    <Layout style={styles.container} level="1">
      <Text category="h1">Profile</Text>
      <Text>{currentUser?.name}</Text>
      <Avatar source={{uri: currentUser?.avatar}} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
