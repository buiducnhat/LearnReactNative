import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card, Input, Modal} from '@ui-kitten/components';
import {useAppDispatch} from '@/hooks/redux.hook';
import {todoActions} from '@/features/todo/todo.slice';
import {Todo} from '@/features/todo/todo.model';

interface TodoFormModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  type: 'add' | 'edit';
  todo?: Todo;
}

const TodoFormModal = ({
  visible,
  setVisible,
  type,
  todo,
}: TodoFormModalProps) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState(todo?.name || '');
  const [description, setDescription] = useState(todo?.description || '');

  const onBackdropPress = () => {
    setVisible(false);
    setName('');
    setDescription('');
  };

  const handleAddTodo = () => {
    if (name) {
      dispatch(todoActions.addTodo({name, description}));
    }
  };

  const handleEditTodo = () => {
    if (todo && name) {
      dispatch(todoActions.updateTodo({...todo, name, description}));
    }
  };

  const onPressSaveButton = () => {
    type === 'add' ? handleAddTodo() : handleEditTodo();
    setName('');
    setDescription('');
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      style={styles.container}
      backdropStyle={styles.backdrop}
      onBackdropPress={onBackdropPress}>
      <Card disabled={true}>
        <Input
          style={styles.marginBottom}
          placeholder="Name"
          autoCorrect={false}
          autoComplete="off"
          value={name}
          onChangeText={setName}
        />
        <Input
          style={styles.marginBottom}
          placeholder="Description"
          multiline
          numberOfLines={5}
          autoCorrect={false}
          autoComplete="off"
          value={description}
          onChangeText={setDescription}
        />
        <Button onPress={onPressSaveButton}>Save</Button>
      </Card>
    </Modal>
  );
};

export default TodoFormModal;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.8,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  marginBottom: {
    marginBottom: 16,
  },
});
