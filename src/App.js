import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import styled from "styled-components";
import { Counter } from "./features/counter/Counter";

function App() {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [todos, setTodos] = useState([
    {
      id: 0,
      description: "Complete online JavaScript course",
      completed: true,
    },
    {
      id: 1,
      description: "Jog around the park 3x",
      completed: false,
    },
    {
      id: 2,
      description: "10 minutes mediation",
      completed: false,
    },
    {
      id: 3,
      description: "Read for 1 hour",
      completed: false,
    },
    {
      id: 4,
      description: "Pick up groceries",
      completed: false,
    },
    {
      id: 5,
      description: "Complete Todo App on Frontend Mentor",
      completed: false,
    },
  ]);

  return (
    <div className="min-h-screen bg-light-veryLightGrayishBlue">
      <div className={`bg-bg-mobile-light bg-cover h-200px`}></div>
      <div className="mx-6 -mt-38">
        <div className="flex flex-row justify-between h-mobileLogoHeight">
          <h1 className="text-white text-logoMobile font-bold tracking-mobileLogo leading-tight">
            TODO
          </h1>
          <button
            className=""
            onClick={() =>
              setIsLightTheme((prevState) => {
                return !prevState;
              })
            }
          >
            <img
              alt={`A ${
                isLightTheme ? "moon" : "sun"
              } icon representing the theme toggler button.`}
              src={
                isLightTheme
                  ? "./images/icon-moon.svg"
                  : "./images/icon-sun.svg"
              }
              className="h-5 w-5"
            />
          </button>
        </div>
        <form className="mt-10">
          <div className="rounded-md bg-white flex flex-row items-center">
            <div className="ml-5 rounded-full h-5 w-5 border-darkGrayishBlue border"></div>
            <input
              type="text"
              className="block py-4 px-3 text-xs text-darkGrayishBlue flex-grow rounded-md focus:outline-none"
              name="input-todo"
              placeholder="Create a new todo..."
            />
            <label htmlFor="input-todo" className="absolute -z-50">
              Create a new todo...
            </label>
          </div>
        </form>
        <div className="mt-4 rounded-md bg-white">
          {todos.map((todo) => {
            return (
              <div
                key={todo.id}
                className="flex flex-row items-center justify-between overflow-x-hidden px-5 py-4 border-solid border-b border-light-veryLightGrayishBlue"
              >
                <div className="flex flex-row items-center">
                  <input
                    id={`todo-checkbox-${todo.id}`}
                    type="checkbox"
                    className="absolute -z-50"
                  />
                  <label
                    htmlFor={`todo-checkbox-${todo.id}`}
                    className="flex flex-row items-center"
                  >
                    <div
                      className={`rounded-full h-5 w-5 border-darkGrayishBlue border mr-3 flex flex-col justify-center ${
                        todo.completed && "bg-bg-check"
                      }`}
                    >
                      <img
                        alt="An image of a checkmark"
                        src="./images/icon-check.svg"
                        className={`block mx-auto w-2 h-2`}
                      />
                    </div>
                    <p
                      className={`text-xs ${
                        todo.completed &&
                        "line-through text-light-lightGrayishBlue"
                      }`}
                    >
                      {todo.description}
                    </p>
                  </label>
                </div>
                <button className="">
                  <img
                    alt="An cross icon representing the delete button."
                    src="./images/icon-cross.svg"
                    className="h-3.5 w-3.5"
                  />
                </button>
              </div>
            );
          })}
          <div className="flex flex-row items-center justify-between px-5 pt-4 pb-5 text-xs text-light-darkGrayishBlue">
            <p className="">
              {todos.filter((todo) => todo.completed === false).length} items
              left
            </p>
            <div className="hidden"></div>
            <button className="">Clear Completed</button>
          </div>
        </div>
        <div className="mt-4 rounded-md bg-white flex flex-row justify-center items-center text-sm text-light-darkGrayishBlue py-3.5 font-bold">
          <label htmlFor="filter-all" className={`mx-2 text-light`}>
            <input
              type="radio"
              id="filter-all"
              name="filter"
              value="all"
              className="absolute -z-50"
              checked
            />
            All
          </label>
          <label htmlFor="filter-active" className="mx-2">
            <input
              type="radio"
              id="filter-active"
              name="filter"
              value="active"
              className="absolute -z-50"
            />
            Active
          </label>
          <label htmlFor="filter-completed" className="mx-2">
            <input
              type="radio"
              id="filter-completed"
              name="filter"
              value="completed"
              className="absolute -z-50"
            />
            Completed
          </label>
        </div>
        <div className="mt-10 text-sm text-light-darkGrayishBlue">
          <p className="text-center">Drag and drop to reorder list</p>
        </div>
      </div>
    </div>
  );
}

export default App;
