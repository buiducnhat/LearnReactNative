import {TouchableWithoutFeedback, View} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  CheckBox,
  Icon,
  IconProps,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import {Todo} from '@/models/todo.model';
import {useAppDispatch} from '@/hooks/redux.hook';
import {toggleCompleteTodo, deleteTodo} from '@/features/todo/todo.slice';
import TodoFormModal from './todo-form-modal';

interface TodoCardProps {
  todo: Todo;
}

const EditIcon = (props: IconProps) => <Icon {...props} name="edit-outline" />;

const DeleteIcon = (props: IconProps) => (
  <Icon {...props} name="trash-outline" />
);

const TodoCard = ({todo}: TodoCardProps) => {
  const dispatch = useAppDispatch();

  const styles = useStyleSheet(themedStyles);

  const {id, isCompleted, name, description} = todo;

  const [openEditModal, setOpenEditModal] = useState(false);
  const [isExtended, setIsExtended] = useState(false);

  const onChangeCompleteCheckBox = () => {
    dispatch(toggleCompleteTodo(id));
  };

  const onPressEditButton = () => {
    setOpenEditModal(true);
  };

  const onPressDeleteButton = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {openEditModal && (
        <TodoFormModal
          visible={openEditModal}
          setVisible={setOpenEditModal}
          type="edit"
          todo={todo}
        />
      )}

      <TouchableWithoutFeedback onPress={() => setIsExtended(!isExtended)}>
        <Layout style={styles.container}>
          {isCompleted && <View style={styles.isCompletedBadge} />}

          <View style={{marginHorizontal: 18}}>
            <CheckBox
              status="success"
              checked={isCompleted}
              onChange={onChangeCompleteCheckBox}
            />
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
              onPress={onPressEditButton}
            />
            <Button
              style={styles.actionButton}
              appearance="ghost"
              size="small"
              status="danger"
              accessoryLeft={DeleteIcon}
              onPress={onPressDeleteButton}
            />
          </View>
        </Layout>
      </TouchableWithoutFeedback>
    </>
  );
};

export default TodoCard;

const themedStyles = StyleService.create({
  container: {
    position: 'relative',
    overflow: 'hidden',
    minHeight: 100,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    borderRadius: 12,
    marginHorizontal: 12,
    marginVertical: 8,
  },
  isCompletedBadge: {
    position: 'absolute',
    width: 8,
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'color-success-500',
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
