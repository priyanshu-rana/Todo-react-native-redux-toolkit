import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./features/todos/TodoSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
});
