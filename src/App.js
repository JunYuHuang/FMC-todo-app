import React, { useState, useEffect } from "react";
import AppHeader from "./components/AppHeader";
import CreateTodoForm from "./components/CreateTodoForm";
import Todo from "./components/Todo";
import TodosMenu from "./components/TodosMenu";
import TodosFilterTool from "./components/TodosFilterTool";
import {
  checkLSKeyValueExists,
  getLSKeyValue,
  setLSKeyValue,
} from "./lib/localStorageHelper";
// import styled from "styled-components";
// import { Counter } from "./features/counter/Counter";
import { nanoid } from "nanoid";
import "tailwindcss/tailwind.css";
// import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function App() {
  const THEME = "isLightTheme";
  const TODOS = "todos";
  const FILTER = "todoFilter";

  const [todoText, setTodoText] = useState("");
  const [todoFilter, setTodoFilter] = useState("All");
  const [todos, setTodos] = useState([]);
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    loadState();
  }, []);

  useEffect(() => {
    setLSKeyValue(THEME, isLightTheme);
  }, [isLightTheme]);

  useEffect(() => {
    setLSKeyValue(TODOS, todos);
  }, [todos]);

  useEffect(() => {
    setLSKeyValue(FILTER, todoFilter);
  }, [todoFilter]);

  //
  // helper functions
  //

  // load saved app state (theme and todo list) from localStorage or load dummy data
  const loadState = () => {
    checkLSKeyValueExists(THEME)
      ? setIsLightTheme(getLSKeyValue(THEME))
      : setIsLightTheme(true);

    checkLSKeyValueExists(TODOS)
      ? setTodos(getLSKeyValue(TODOS))
      : fetch("data.json")
          .then((res) => res.json())
          .then((data) => {
            setTodos(data);
          })
          .catch((err) => console.log(err));

    checkLSKeyValueExists(FILTER)
      ? setTodoFilter(getLSKeyValue(FILTER))
      : setTodoFilter("All");
  };

  const createTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: nanoid(),
          description: text,
          completed: false,
        },
      ];
    });
  };

  const toggleTodoCompletedState = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? {
              ...prevTodo,
              completed: !prevTodo.completed,
            }
          : prevTodo
      );
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.id !== id);
    });
  };

  const shouldShowTodo = (todo, filter) => {
    let show = false;
    switch (filter) {
      case "All":
        show = true;
        break;
      case "Active":
        show = todo.completed ? false : true;
        break;
      case "Completed":
        show = todo.completed ? true : false;
        break;
      default:
        console.log("Error: Invalid filter selected!");
    }
    return show;
  };

  return (
    <div className="min-h-screen bg-light-veryLightGrayishBlue">
      <div
        className={`bg-bg-mobile-light bg-cover h-200px mobilePlus:bg-bg-desktop-light mobilePlus:h-300px mobilePlus:bg-center`}
      ></div>
      <div className="mx-6 -mt-38 max-w-540px mobilePlus:mx-auto mobilePlus:-mt-56">
        <AppHeader
          isLightTheme={isLightTheme}
          setIsLightTheme={setIsLightTheme}
        />
        <CreateTodoForm
          todoText={todoText}
          setTodoText={setTodoText}
          createTodo={createTodo}
        />
        <div className="mt-4 rounded-md bg-white shadow-sm mobilePlus:mt-6 mobilePlus:shadow-lg">
          {todos.map(
            (todo) =>
              shouldShowTodo(todo, todoFilter) && (
                <Todo
                  key={todo.id}
                  todo={todo}
                  toggleTodoCompletedState={toggleTodoCompletedState}
                  deleteTodo={deleteTodo}
                />
              )
          )}
          <TodosMenu
            todos={todos}
            setTodos={setTodos}
            todoFilter={todoFilter}
            setTodoFilter={setTodoFilter}
          />
        </div>
        <div className="shadow-sm mobilePlus:hidden mt-4 rounded-md bg-white flex flex-row justify-center items-center py-3.5">
          <TodosFilterTool
            todoFilter={todoFilter}
            setTodoFilter={setTodoFilter}
          />
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

export default App;
