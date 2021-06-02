import TodosFilterTool from "./TodosFilterTool";

const TodosMenu = ({ todos, setTodos, todoFilter, setTodoFilter }) => {
  return (
    <div className="flex flex-row items-center justify-between px-5 pt-4 pb-5 mobilePlus:pb-3 mobilePlus:pt-3.5">
      <p className="text-xs text-light-darkGrayishBlue mobilePlus:text-sm mobilePlus:w-28">
        {todos.filter((todo) => todo.completed === false).length} items left
      </p>
      <div className="hidden mobilePlus:block">
        <TodosFilterTool
          todoFilter={todoFilter}
          setTodoFilter={setTodoFilter}
        />
      </div>
      <button
        className="text-xs text-light-darkGrayishBlue hover:text-light-veryDarkGrayishBlue mobilePlus:text-sm mobilePlus:w-28"
        onClick={() =>
          setTodos((prevTodos) => {
            return prevTodos.filter((todo) => !todo.completed);
          })
        }
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodosMenu;
