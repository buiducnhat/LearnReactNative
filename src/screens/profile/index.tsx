import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Button, Layout, Text} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';

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
    <Layout style={styles.container} level="2">
      <ProfileTopBar />

      <Layout
        level="2"
        style={{
          height: 150,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Avatar
          style={{width: 96, height: 96}}
          source={
            currentUser?.imageUrl
              ? {uri: currentUser?.imageUrl}
              : require('@/assets/images/avatar-placeholder.webp')
          }
        />
      </Layout>

      <Layout style={{width: '100%', marginBottom: 16}} level="1">
        <View style={styles.itemContainer}>
          <Text appearance="hint">Name</Text>
          <Text>{currentUser?.name}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text appearance="hint">Surname</Text>
          <Text>{currentUser?.surname}</Text>
        </View>
      </Layout>

      <Layout style={{width: '100%', marginBottom: 16}} level="1">
        <View style={styles.itemContainer}>
          <Text appearance="hint">Email</Text>
          <Text>{currentUser?.emailAddress}</Text>
        </View>

        <View style={styles.itemContainer}>
          <Text appearance="hint">Username</Text>
          <Text>{currentUser?.userName}</Text>
        </View>
      </Layout>

      <Button style={{width: '85%'}}>DONE</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 16,
    borderBottomColor: 'rgba(0,0,0,0.15)',
    borderBottomWidth: 0.5,
  },
});

export default ProfileScreen;
