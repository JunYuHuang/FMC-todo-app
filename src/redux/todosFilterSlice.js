import { createSlice } from "@reduxjs/toolkit";

export const todosFilter = createSlice({
  name: "todosFilter",
  initialState: "All",
  reducers: {
    setTodosFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setTodosFilter } = todosFilter.actions;

export const selectTodosFilter = (state) => state.todosFilter;

export default todosFilter.reducer;
