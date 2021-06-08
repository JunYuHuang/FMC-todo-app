import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import todosFilterReducer from "./todosFilterSlice";
import todosReducer from "./todosSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    todosFilter: todosFilterReducer,
    todos: todosReducer,
  },
});
