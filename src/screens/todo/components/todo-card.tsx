import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Button,
  CheckBox,
  Icon,
  IconProps,
  Layout,
  Text,
} from '@ui-kitten/components';

interface TodoCardProps {
  id: number | string;
  name: string;
  description?: string;
  isCompleted: boolean;
}

const EditIcon = (props: IconProps) => <Icon {...props} name="edit-outline" />;

const DeleteIcon = (props: IconProps) => (
  <Icon {...props} name="trash-outline" />
);

const TodoCard = ({id, name, description, isCompleted}: TodoCardProps) => {
  return (
    <Layout level="1" style={styles.container}>
      <View style={{marginEnd: 12}}>
        <CheckBox checked={isCompleted} status="success" />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.nameText} numberOfLines={1}>
          {name}
        </Text>
        <Text appearance="hint" numberOfLines={1} ellipsizeMode="tail">
          {description}
        </Text>
      </View>

      <View style={styles.actionContainer}>
        <Button
          appearance="ghost"
          size="small"
          status="info"
          accessoryLeft={EditIcon}
        />
        <Button
          appearance="ghost"
          size="small"
          status="danger"
          accessoryLeft={DeleteIcon}
        />
      </View>
    </Layout>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  textContainer: {
    flex: 5,
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  actionContainer: {
    flexDirection: 'row',
    flex: 2,
  },
});
