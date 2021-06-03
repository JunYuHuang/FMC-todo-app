const CreateTodoForm = ({ todoText, setTodoText, createTodo }) => {
  const handleCreateTodoForm = (e) => {
    e.preventDefault();
    if (todoText !== "") {
      createTodo(todoText);
    }
    setTodoText("");
  };

  return (
    <form className="mt-10" onSubmit={(e) => handleCreateTodoForm(e)}>
      <div className="rounded-md bg-white flex flex-row items-center">
        <div className="ml-5 rounded-full h-5 w-5 border-light-veryLightGrayishBlue border mobilePlus:h-26px mobilePlus:w-26px mobilePlus:ml-6"></div>
        <input
          type="text"
          className="block py-4 px-3 text-xs text-darkGrayishBlue flex-grow rounded-md focus:outline-none mobilePlus:text-lg mobilePlus:pt-5 mobilePlus:pb-4 mobilePlus:px-6"
          name="input-todo"
          placeholder="Create a new todo..."
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
        />
        <label htmlFor="input-todo" className="absolute -z-50">
          Create a new todo...
        </label>
      </div>
    </form>
  );
};

export default CreateTodoForm;
