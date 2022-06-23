import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {useRoute} from '@react-navigation/native';

import {TenantNotification} from '@/features/tenant-noti/tenant-noti.model';
import NotificationContent from './components/noti-content';
import NotificationComments from './components/noti-comments';

const NotiDetailScreen = () => {
  const route = useRoute<any>();
  const tenantNotification = route.params
    .tenantNotification as TenantNotification;

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={{marginBottom: 12}} />
        <Text category="h5">{tenantNotification.name}</Text>

        <View style={{marginBottom: 12}} />

        <NotificationContent data={tenantNotification.data} />

        <Text category="h6" style={styles.commentText}>
          Comments
        </Text>

        <NotificationComments notificationId={tenantNotification.id} />
      </ScrollView>
    </Layout>
  );
};

export default NotiDetailScreen;

const styles = StyleSheet.create({
  scrollViewContainer: {
    padding: 12,
  },
  listContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  commentText: {
    marginTop: 20,
    marginBottom: 12,
  },
});
