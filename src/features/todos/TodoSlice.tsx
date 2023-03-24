import { createSlice } from "@reduxjs/toolkit";

export interface todo {
  id: number;
  text: string;
  completed: boolean;
}

let nextTodoId = 1;
const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state: todo[], action) {
      // const { id, text } = action.payload;
      state.push({ id: nextTodoId++, text: action.payload, completed: false });
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
