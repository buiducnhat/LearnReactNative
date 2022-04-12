export interface Todo {
  id: number;
  name: string;
  description?: string;
  isCompleted: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export type AddTodoPayload = Omit<Todo, 'id' | 'isCompleted'>;
