import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
// import styled from "styled-components";
// import { Counter } from "./features/counter/Counter";
import { nanoid } from "nanoid";
import AppHeader from "./components/AppHeader";
import CreateTodoForm from "./components/CreateTodoForm";
import Todo from "./components/Todo";
import TodosMenu from "./components/TodosMenu";
import TodosFilterTool from "./components/TodosFilterTool";

function App() {
  const [todoText, setTodoText] = useState("");
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [todoFilter, setTodoFilter] = useState("All");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //
  // helper functions
  //

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
      <div className={`bg-bg-mobile-light bg-cover h-200px`}></div>
      <div className="mx-6 -mt-38">
        <AppHeader
          isLightTheme={isLightTheme}
          setIsLightTheme={setIsLightTheme}
        />
        <CreateTodoForm
          todoText={todoText}
          setTodoText={setTodoText}
          createTodo={createTodo}
        />
        <div className="mt-4 rounded-md bg-white shadow-sm">
          {todos.map((todo) => {
            return (
              shouldShowTodo(todo, todoFilter) && (
                <Todo
                  key={todo.id}
                  todo={todo}
                  toggleTodoCompletedState={toggleTodoCompletedState}
                  deleteTodo={deleteTodo}
                />
              )
            );
          })}
          <TodosMenu todos={todos} setTodos={setTodos} />
        </div>
        <TodosFilterTool
          todoFilter={todoFilter}
          setTodoFilter={setTodoFilter}
        />
        <div className="mt-10">
          <p className="text-sm text-light-darkGrayishBlue text-center">
            Drag and drop to reorder list
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
