import TodosFilterTool from "./TodosFilterTool";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos, clearCompletedTodos } from "../redux/todosSlice";

export default function TodosMenu() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const handleClearCompletedTodos = () => {
    dispatch(clearCompletedTodos());
  };

  return (
    <div className="flex flex-row items-center justify-between px-5 pt-4 pb-5 mobilePlus:pb-3 mobilePlus:pt-3.5">
      <p className="text-xs text-light-darkGrayishBlue dark:text-dark-darkGrayishBlue mobilePlus:text-sm mobilePlus:w-28">
        {todos.filter((todo) => todo.completed === false).length} items left
      </p>
      <div className="hidden mobilePlus:block">
        <TodosFilterTool />
      </div>
      <button
        className="focus:outline-none text-xs text-light-darkGrayishBlue dark:text-dark-darkGrayishBlue hover:text-light-veryDarkGrayishBlue dark:hover:text-dark-lightGrayishBlueHover mobilePlus:text-sm mobilePlus:w-28"
        onClick={handleClearCompletedTodos}
      >
        Clear Completed
      </button>
    </div>
  );
}
