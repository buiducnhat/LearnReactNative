import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, List} from '@ui-kitten/components';
import axios from 'axios';

import NotificationCard from './components/noti-card';

const GeneralNotiScreen = () => {
  const [items, setItems] = useState<any[]>([]);

  const fetchData = async () => {
    const response = await axios({
      url: 'http://103.229.41.59/api/services/app/UserCityNotification/GetAllNotificationUserTenant?Type=2',
    });
    console.log('fetched');
    setItems(response.data.result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = (info: any) => <NotificationCard {...info.item} />;

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
