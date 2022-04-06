import React from 'react';
import {Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const ProfileScreen = () => {
  return (
    <Layout style={styles.container} level="1">
      <Text category="h1">Profile</Text>
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
