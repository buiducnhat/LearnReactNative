import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Layout, List} from '@ui-kitten/components';

import TodoTopBar from './components/todo-top-bar';
import TodoCard from './components/todo-card';
import {useAppSelector} from '@/hooks/redux.hook';
import {selectTodos} from '@/features/todo/todo.slice';
import FloatingButton from '@/components/floating-button';
import TodoFormModal from './components/todo-form-modal';

const TodoScreen = () => {
  const todos = useAppSelector(selectTodos);

  const [openAddTodoModal, setOpenAddTodoModal] = useState(false);

  return (
    <Layout level="1" style={styles.container}>
      <TodoTopBar />

      <TodoFormModal
        visible={openAddTodoModal}
        setVisible={setOpenAddTodoModal}
        type="add"
      />

      <List
        style={styles.todosContainer}
        ListHeaderComponent={<View />}
        ListHeaderComponentStyle={{height: 8}}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{height: 8}}
        data={todos}
        renderItem={info => <TodoCard todo={info.item} />}
      />

      <FloatingButton onPress={() => setOpenAddTodoModal(true)} />
    </Layout>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  todosContainer: {},
});
