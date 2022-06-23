import {StyleSheet, View} from 'react-native';
import {Avatar, Divider, Layout, Text} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import Container from 'typedi';
import {formatRelative} from 'date-fns';

import {TenantNotificationComment} from '@/features/tenant-noti/tenant-noti.model';
import TenantNotiService from '@/features/tenant-noti/tenant-noti.service';

interface NotificationCommentsProps {
  notificationId: number;
}

const NotificationComments = ({notificationId}: NotificationCommentsProps) => {
  const [data, setData] = useState<TenantNotificationComment[]>([]);

  useEffect(() => {
    const tenantNotiService = Container.get(TenantNotiService);
    tenantNotiService
      .getNotificationCommentsApi(notificationId)
      .then(result => setData(result));

    return;
  }, [notificationId]);

  const Item = ({
    comment,
    avatar,
    fullName,
    creationTime,
  }: TenantNotificationComment) => (
    <Layout style={styles.itemContainer}>
      <View style={{marginEnd: 16}}>
        <Avatar
          source={
            avatar
              ? {uri: avatar}
              : require('@/assets/images/avatar-placeholder.webp')
          }
          size="large"
        />
      </View>

      <View style={{flex: 1}}>
        <View style={styles.nameAndDateContainer}>
          <Text style={styles.nameText} status="info">
            {fullName}
          </Text>

          <Text category="s2" appearance="hint">
            {formatRelative(new Date(creationTime), new Date())}
          </Text>
        </View>

        <View>
          <Text>{comment}</Text>
        </View>
      </View>
    </Layout>
  );

  return (
    <View style={{paddingBottom: 24}}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <Divider />
          <Item {...item} />
        </React.Fragment>
      ))}
    </View>
  );
};

export default NotificationComments;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 12,
  },
  nameAndDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
