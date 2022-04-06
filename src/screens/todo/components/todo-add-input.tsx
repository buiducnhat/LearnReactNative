import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Icon, IconProps, Input} from '@ui-kitten/components';

const AddIcon = (props: IconProps) => <Icon {...props} name="plus" />;

const TodoAddInput = () => {
  return (
    <View style={styles.container}>
      <Input style={styles.input} placeholder="Add some task" />
      <Button
        style={styles.button}
        size="small"
        appearance="outline"
        accessoryLeft={AddIcon}
      />
    </View>
  );
};

export default TodoAddInput;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
  },
  input: {
    borderRadius: 12,
    flex: 10,
    marginEnd: 8,
  },
  button: {
    flex: 1,
    borderRadius: 12,
  },
});
