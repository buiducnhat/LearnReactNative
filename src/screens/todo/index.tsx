import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Layout, List} from '@ui-kitten/components';
import TodoTopBar from './components/todo-top-bar';
import TodoCard from './components/todo-card';
import TodoAddInput from './components/todo-add-input';

const tasks = [
  {
    id: 1,
    name: 'Task 1',
    description: 'Hello, this is task one, do this now!',
    isCompleted: false,
  },
  {
    id: 2,
    name: 'Task 2',
    description:
      'Hello, this is task one, do this now!, do this now, do this now',
    isCompleted: true,
  },
  {
    id: 3,
    name: 'Task 3',
    description: 'Hello, this is task one, do this now!',
    isCompleted: false,
  },
  {
    id: 4,
    name: 'Task 4',
    description: 'Hello, this is task one, do this now!',
    isCompleted: true,
  },
  {
    id: 5,
    name: 'Task 5',
    description: 'Hello, this is task one, do this now!',
    isCompleted: false,
  },
  {
    id: 6,
    name: 'Task 5',
    description: 'Hello, this is task one, do this now!',
    isCompleted: false,
  },
  {
    id: 7,
    name: 'Task 5',
    description: 'Hello, this is task one, do this now!',
    isCompleted: false,
  },
];

const TodoScreen = () => {
  return (
    <Layout level="1" style={styles.container}>
      <TodoTopBar />

      <List
        style={styles.tasksContainer}
        ListHeaderComponent={<View />}
        ListHeaderComponentStyle={{height: 8}}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{height: 8}}
        data={tasks}
        renderItem={info => <TodoCard {...info.item} />}
      />

      <TodoAddInput />
    </Layout>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tasksContainer: {},
});
