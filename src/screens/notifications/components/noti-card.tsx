import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';
import React from 'react';
import {
  Button,
  Divider,
  Icon,
  IconProps,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import {format} from 'date-fns';

import {TenantNotification} from '@/features/tenant-noti/tenant-noti.model';
import {useNavigation} from '@react-navigation/native';
import {routes} from '@/configs/routes.config';

const FollowIcon = (props: IconProps) => (
  <Icon name="heart-outline" {...props} />
);

const CommentIcon = (props: IconProps) => (
  <Icon name="message-circle-outline" {...props} />
);

interface NotificationCardProps
  extends TenantNotification,
    TouchableWithoutFeedbackProps {}

const NotificationCard = ({
  name,
  creationTime,
  countFollow,
  countComment,
  ...rest
}: NotificationCardProps) => {
  const styles = useStyleSheet(themedStyles);

  const navigation = useNavigation();

  const [level, setLevel] = React.useState('1');

  const onPress = () => {
    setLevel(level === '1' ? '3' : '1');
    navigation.navigate(routes.notiDetail as never);
  };

  return (
    <TouchableWithoutFeedback onPress={onPress} {...rest}>
      <Layout style={styles.container} level={level}>
        <Text style={styles.nameText} status="info">
          {name}
        </Text>

        <Divider style={{marginVertical: 8}} />

        <View style={styles.bottomContainer}>
          <Button
            status="danger"
            size="small"
            appearance="ghost"
            accessoryLeft={FollowIcon}>
            {countFollow || '0'}
          </Button>

          <Button
            status="success"
            size="small"
            appearance="ghost"
            accessoryLeft={CommentIcon}>
            {countComment || '0'}
          </Button>

          <Text category="s1" appearance="hint" style={styles.timeText}>
            {format(new Date(creationTime), 'KK:mm a - MMM, dd yyyy')}
          </Text>
        </View>
      </Layout>
    </TouchableWithoutFeedback>
  );
};

const themedStyles = StyleService.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
    elevation: 5,
    borderRadius: 12,
    marginHorizontal: 4,
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    flex: 1,
    textAlign: 'right',
    fontSize: 14,
  },
});
export default NotificationCard;
