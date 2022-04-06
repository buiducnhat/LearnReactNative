import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '@/features/store';
import {Todo} from '@/models/todo.model';

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<Todo, 'id'>>) => {
      const curMaxId = state.todos.reduce(
        (maxId, todo) => Math.max(maxId, todo.id),
        0,
      );
      state.todos.push({...action.payload, id: curMaxId + 1});
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, ...action.payload};
        }
        return todo;
      });
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    clearTodo: state => {
      state.todos = [];
    },
  },
});

export const {addTodo, updateTodo, removeTodo, clearTodo} = appSlice.actions;

export const selectTodos = (state: RootState) => state.todo.todos;

export default appSlice.reducer;
