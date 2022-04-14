import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {useRoute} from '@react-navigation/native';

import {TenantNotification} from '@/features/tenant-noti/tenant-noti.model';
import NotificationContent from './components/noti-content';

const NotiDetailScreen = () => {
  const route = useRoute<any>();
  const tenantNotification = route.params
    .tenantNotification as TenantNotification;

  return (
    <Layout style={styles.container}>
      <View style={{marginBottom: 12}} />
      <Text category="h5">{tenantNotification.name}</Text>
      <View style={{marginBottom: 12}} />
      <NotificationContent data={tenantNotification.data} />
    </Layout>
  );
};

export default NotiDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  listContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
