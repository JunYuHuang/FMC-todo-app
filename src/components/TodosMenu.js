const TodosMenu = ({ todos, setTodos }) => {
  return (
    <div className="flex flex-row items-center justify-between px-5 pt-4 pb-5 text-xs text-light-darkGrayishBlue">
      <p className="">
        {todos.filter((todo) => todo.completed === false).length} items left
      </p>
      <div className="hidden"></div>
      <button
        className=""
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
