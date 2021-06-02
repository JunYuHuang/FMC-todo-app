const Todo = ({ todo, toggleTodoCompletedState, deleteTodo }) => {
  return (
    <div className="flex flex-row items-center justify-between overflow-x-hidden px-5 py-4 border-solid border-b border-light-veryLightGrayishBlue group mobilePlus:pt-5 mobilePlus:pt-4 mobilePlus:px-6">
      <div className="flex flex-row items-center">
        <label
          htmlFor={`todo-checkbox-${todo.id}`}
          className="flex flex-row items-center"
        >
          <input
            id={`todo-checkbox-${todo.id}`}
            name={`todo-checkbox-${todo.id}`}
            value={todo.id}
            type="checkbox"
            className="absolute -z-50"
            checked={todo.completed}
            onChange={() => toggleTodoCompletedState(todo.id)}
          />
          <div
            className={`rounded-full h-5 w-5 border-darkGrayishBlue border mr-3 flex flex-col justify-center ${
              todo.completed && "bg-bg-check"
            } mobilePlus:h-26px mobilePlus:w-26px mobilePlus:mr-6`}
          >
            <img
              alt="A checkmark"
              src="./images/icon-check.svg"
              className={`block mx-auto w-2 h-2`}
            />
          </div>
          <p
            className={`text-xs hover:cursor-pointer ${
              todo.completed && "line-through text-light-lightGrayishBlue"
            } mobilePlus:text-lg`}
          >
            {todo.description}
          </p>
        </label>
      </div>
      <button
        className="hover:cursor-pointer mobilePlus:opacity-0 group-hover:opacity-100"
        onClick={() => deleteTodo(todo.id)}
      >
        <img
          alt="An cross icon representing the delete button."
          src="./images/icon-cross.svg"
          className="h-3.5 w-3.5 mobilePlus:w-18px mobilePlus:h-18px"
        />
      </button>
    </div>
  );
};

export default Todo;
