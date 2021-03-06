import React, {useEffect, useState} from 'react';
import {ListRenderItemInfo, StyleSheet} from 'react-native';
import {Layout, List} from '@ui-kitten/components';
import Container from 'typedi';

import NotificationCard from './components/noti-card';
import TenantNotiService from '@/features/tenant-noti/tenant-noti.service';
import {TenantNotification} from '@/features/tenant-noti/tenant-noti.model';

const GeneralNotiScreen = () => {
  const [items, setItems] = useState<TenantNotification[]>([]);

  const fetchAllNotifications = () => {
    const tentantNotiService = Container.get(TenantNotiService);
    tentantNotiService.getGeneralNotificationsApi().then(data => {
      setItems(data);
    });
  };

  useEffect(() => {
    fetchAllNotifications();
  }, []);

  const renderItem = (info: ListRenderItemInfo<TenantNotification>) => (
    <NotificationCard tenantNotification={info.item} />
  );

  return (
    <Layout style={styles.container}>
      <List style={styles.listContainer} data={items} renderItem={renderItem} />
    </Layout>
  );
};

export default GeneralNotiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
});
