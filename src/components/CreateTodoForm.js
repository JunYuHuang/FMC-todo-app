import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todosSlice";

export default function CreateTodoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();

  const handleCreateTodoForm = (e) => {
    e.preventDefault();
    if (todoText !== "") {
      dispatch(createTodo({ text: todoText }));
    }
    setTodoText("");
  };

  const handleSetTodoText = (text) => {
    setTodoText(text);
  };

  return (
    <form className="mt-10" onSubmit={(e) => handleCreateTodoForm(e)}>
      <div className="rounded-md bg-white dark:bg-dark-veryDarkDesaturatedBlue flex flex-row items-center">
        <div className="ml-5 rounded-full h-5 w-5 border-light-veryLightGrayishBlue dark:border-dark-veryDarkGrayishBlue1 border mobilePlus:h-26px mobilePlus:w-26px mobilePlus:ml-6"></div>
        <input
          type="text"
          className="block py-4 px-3 text-xs text-light-veryDarkGrayishBlue dark:text-dark-lightGrayishBlue flex-grow rounded-md focus:outline-none mobilePlus:text-lg mobilePlus:pt-5 mobilePlus:pb-4 mobilePlus:px-6 dark:bg-dark-veryDarkDesaturatedBlue dark:placeholder-darkGrayishBlue"
          name="input-todo"
          placeholder="Create a new todo..."
          value={todoText}
          onChange={(e) => handleSetTodoText(e.target.value)}
        />
        <label htmlFor="input-todo" className="absolute -z-50">
          Create a new todo...
        </label>
      </div>
    </form>
  );
}
