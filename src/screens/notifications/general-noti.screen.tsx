import {StyleSheet} from 'react-native';
import React from 'react';
import {Layout, Text} from '@ui-kitten/components';

const ApartmentNotiScreen = () => {
  return (
    <Layout style={styles.container}>
      <Text>Hello</Text>
    </Layout>
  );
};

export default ApartmentNotiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
