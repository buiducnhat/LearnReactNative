import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@/features/store';
import {Todo} from '@/features/todo/todo.model';
import {AddTodoPayload, TodoState} from './todo.model';

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
      const curMaxId = state.todos.reduce(
        (maxId, todo) => Math.max(maxId, todo.id),
        0,
      );
      state.todos.push({
        ...action.payload,
        isCompleted: false,
        id: curMaxId + 1,
      });
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, ...action.payload};
        }
        return todo;
      });
    },
    toggleCompleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {...todo, isCompleted: !todo.isCompleted};
        }
        return todo;
      });
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    clearTodo: state => {
      state.todos = [];
    },
  },
});

export const todoActions = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo.todos;
export const selectTodoById = (id: number) => (state: any) => {
  return state.todo.todos.find((todo: Todo) => todo.id === id);
};

export default todoSlice.reducer;
