import {
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
} from 'react-native';
import React from 'react';
import {
  Divider,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import {format} from 'date-fns';

interface NotificationCardProps extends TouchableWithoutFeedbackProps {
  name: string;
  data: string;
  creationTime: string;
}

const NotificationCard = ({
  name,
  creationTime,
  ...rest
}: NotificationCardProps) => {
  const styles = useStyleSheet(themedStyles);

  const [level, setLevel] = React.useState('1');

  const onPress = () => {
    setLevel(level === '1' ? '2' : '1');
  };

  return (
    <TouchableWithoutFeedback onPress={onPress} {...rest}>
      <Layout style={styles.container} level={level}>
        <Text style={styles.nameText} status="info">
          {name}
        </Text>

        <Divider style={{marginVertical: 8}} />

        <Text category="s1" appearance="hint" style={styles.timeText}>
          {format(new Date(creationTime), 'KK:mm a - MMM, dd yyyy')}
        </Text>
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
  timeText: {
    textAlign: 'right',
    fontSize: 14,
  },
});
export default NotificationCard;
