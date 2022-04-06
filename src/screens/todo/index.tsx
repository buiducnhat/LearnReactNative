import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Layout, List} from '@ui-kitten/components';
import TodoTopBar from './components/todo-top-bar';
import TodoCard from './components/todo-card';
import {useAppSelector} from '@/hooks/redux.hook';
import {selectTodos} from '@/features/todo/todo.slice';
import FloatingButton from '@/components/floating-button';

const TodoScreen = () => {
  const todos = useAppSelector(selectTodos);

  return (
    <Layout level="1" style={styles.container}>
      <TodoTopBar />

      <List
        style={styles.todosContainer}
        ListHeaderComponent={<View />}
        ListHeaderComponentStyle={{height: 8}}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{height: 8}}
        data={todos}
        renderItem={info => <TodoCard {...info.item} />}
      />

      <FloatingButton />
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
