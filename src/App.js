import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import AppHeader from "./components/AppHeader";
import CreateTodoForm from "./components/CreateTodoForm";
import TodoList from "./components/TodoList";
import TodosFilterTool from "./components/TodosFilterTool";
import { useSelector } from "react-redux";
import { selectTheme } from "./redux/themeSlice";
import { selectTodos } from "./redux/todosSlice";
import { selectTodosFilter } from "./redux/todosFilterSlice";
import { loadAppData, saveAppData } from "./lib/appDataHelper";

export default function App() {
  const theme = useSelector(selectTheme);
  const todos = useSelector(selectTodos);
  const todosFilter = useSelector(selectTodosFilter);

  useEffect(() => {
    loadAppData();
  }, []);

  useEffect(() => {
    saveAppData();
  }, [theme, todos, todosFilter]);

  return (
    <div className="min-h-screen bg-light-veryLightGrayishBlue">
      <div
        className={`bg-bg-mobile-light bg-cover h-200px mobilePlus:bg-bg-desktop-light mobilePlus:h-300px mobilePlus:bg-center`}
      ></div>
      <div className="mx-6 -mt-38 max-w-540px mobilePlus:mx-auto mobilePlus:-mt-56">
        <AppHeader />
        <CreateTodoForm />
        <TodoList />
        <div className="shadow-sm mobilePlus:hidden mt-4 rounded-md bg-white flex flex-row justify-center items-center py-3.5">
          <TodosFilterTool />
        </div>
        <div className="mt-10 mobilePlus:mt-12">
          <p className="text-sm text-light-darkGrayishBlue text-center">
            Drag and drop to reorder list
          </p>
        </div>
      </div>
    </div>
  );
}
