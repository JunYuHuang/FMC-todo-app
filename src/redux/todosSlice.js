import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const loadTodosFromAPIAsync = createAsyncThunk(
  "todos/loadTodosFromAPIAsync",
  async () => {
    // TODO: fetch local JSON data from "/public/data.json"
    const res = await fetch(`${process.env.PUBLIC_URL}/data.json`);
    if (res.ok) {
      const todos = await res.json();
      return { todos };
    }
  }
);

export const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    setTodos: (state, action) => {
      return action.payload.array;
    },
    createTodo: (state, action) => {
      state.push({
        id: nanoid(),
        description: action.payload.text,
        completed: false,
      });
    },
    toggleTodoCompletedState: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      );
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    clearCompletedTodos: (state) => {
      return state.filter((todo) => !todo.completed);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTodosFromAPIAsync.fulfilled, (state, action) => {
      return action.payload.todos;
    });
  },
});

export const {
  setTodos,
  createTodo,
  toggleTodoCompletedState,
  deleteTodo,
  clearCompletedTodos,
} = todosSlice.actions;

export const selectTodos = (state) => state.todos;

export default todosSlice.reducer;
