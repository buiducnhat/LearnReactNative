import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';
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
  const [isExtended, setIsExtended] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={() => setIsExtended(!isExtended)}>
      <Layout style={styles.container}>
        <View style={{marginEnd: 12}}>
          <CheckBox checked={isCompleted} status="success" />
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.nameText} numberOfLines={1}>
            {name}
          </Text>
          <Text appearance="hint" numberOfLines={isExtended ? 0 : 1}>
            {description}
          </Text>
        </View>

        <View style={styles.actionContainer}>
          <Button
            style={styles.actionButton}
            appearance="ghost"
            size="small"
            status="info"
            accessoryLeft={EditIcon}
          />
          <Button
            style={styles.actionButton}
            appearance="ghost"
            size="small"
            status="danger"
            accessoryLeft={DeleteIcon}
          />
        </View>
      </Layout>
    </TouchableWithoutFeedback>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 12,
    marginVertical: 8,
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
  actionButton: {
    borderRadius: 12,
  },
});
