import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import styled from "styled-components";
import AppHeader from "./components/AppHeader";
import CreateTodoForm from "./components/CreateTodoForm";
import TodoList from "./components/TodoList";
import TodosFilterTool from "./components/TodosFilterTool";
import { useSelector } from "react-redux";
import { selectTheme } from "./redux/themeSlice";
import { selectTodos } from "./redux/todosSlice";
import { selectTodosFilter } from "./redux/todosFilterSlice";
import { loadAppData, saveAppData } from "./lib/appDataHelper";

const AppContainer = styled.div.attrs((props) => ({
  className:
    "min-h-screen bg-light-veryLightGrayishBlue dark:bg-dark-veryDarkBlue",
}))``;

const SplashBackground = styled.div.attrs((props) => ({
  className:
    "bg-bg-mobile-light dark:bg-bg-mobile-dark bg-cover h-200px mobilePlus:bg-bg-desktop-light mobilePlus:dark:bg-bg-desktop-dark mobilePlus:h-300px",
}))``;

const ComponentsWrapper = styled.div.attrs((props) => ({
  className: "mx-6 -mt-38 max-w-540px mobilePlus:mx-auto mobilePlus:-mt-56",
}))``;

const TodosFilterToolMobileWrapper = styled.div.attrs((props) => ({
  className:
    "shadow-sm mobilePlus:hidden mt-4 rounded-md bg-white dark:bg-dark-veryDarkDesaturatedBlue flex flex-row justify-center items-center py-3.5",
}))``;

const AppHintParagraph = styled.p.attrs((props) => ({
  className:
    "mt-10 mobilePlus:mt-12 text-sm text-light-darkGrayishBlue dark:text-dark-darkGrayishBlue text-center",
}))``;

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
    <AppContainer>
      <SplashBackground />
      <ComponentsWrapper>
        <AppHeader />
        <CreateTodoForm />
        <TodoList />
        <TodosFilterToolMobileWrapper>
          <TodosFilterTool />
        </TodosFilterToolMobileWrapper>
        <AppHintParagraph>Drag and drop to reorder list</AppHintParagraph>
      </ComponentsWrapper>
    </AppContainer>
  );
}
