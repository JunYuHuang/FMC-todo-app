import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { toggleTodoCompletedState, deleteTodo } from "../redux/todosSlice";
import styled from "styled-components";

const TodoContainer = styled.div.attrs((props) => ({
  className:
    "flex flex-row items-center justify-between overflow-x-hidden px-5 py-4 border-solid border-b border-light-veryLightGrayishBlue dark:border-dark-veryDarkGrayishBlue2 group mobilePlus:pt-5 mobilePlus:px-6",
}))``;

const DeleteButton = styled.button.attrs((props) => ({
  className:
    "hover:cursor-pointer mobilePlus:opacity-0 group-hover:opacity-100",
}))``;

const DeleteButtonImg = styled.img.attrs((props) => ({
  className: "h-3.5 w-3.5 mobilePlus:w-18px mobilePlus:h-18px",
  src: "./images/icon-cross.svg",
  alt: "An cross icon representing the delete button.",
}))``;

export default function Todo({ todo, index }) {
  const dispatch = useDispatch();

  const handleToggleTodoCompletedState = (id) => {
    dispatch(toggleTodoCompletedState({ id: id }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <Draggable key={todo.id} draggableId={todo.id} index={index}>
      {(provided) => (
        <TodoContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          id={todo.id}
          key={todo.id}
        >
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
                className="absolute -z-50 -translate-x-full"
                checked={todo.completed}
                onChange={() => handleToggleTodoCompletedState(todo.id)}
              />
              <div
                className={`rounded-full h-5 w-5 hover:cursor-pointer mr-3 flex flex-col justify-center items-center mobilePlus:h-26px mobilePlus:w-26px mobilePlus:mr-6 ${
                  todo.completed
                    ? "bg-bg-check"
                    : "bg-light-veryLightGrayishBlue hover:bg-bg-check dark:bg-dark-veryDarkGrayishBlue1"
                } `}
              >
                <div
                  className={`h-18px w-18px flex flex-col justify-center rounded-full mobilePlus:h-24px mobilePlus:w-24px ${
                    todo.completed
                      ? "bg-bg-check"
                      : "bg-white dark:bg-dark-veryDarkDesaturatedBlue"
                  }`}
                >
                  <img
                    alt="A checkmark"
                    src="./images/icon-check.svg"
                    className={`block mx-auto w-2 h-2 mobilePlus:w-2.5 mobilePlus:h-2.5 ${
                      todo.completed ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </div>
              <p
                className={`text-xs hover:cursor-pointer ${
                  todo.completed
                    ? "line-through text-light-lightGrayishBlue dark:text-dark-veryDarkGrayishBlue1"
                    : "text-light-veryDarkGrayishBlue dark:text-dark-lightGrayishBlue"
                } mobilePlus:text-lg`}
              >
                {todo.description}
              </p>
            </label>
          </div>
          <DeleteButton
            aria-label="Delete todo"
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <DeleteButtonImg />
          </DeleteButton>
        </TodoContainer>
      )}
    </Draggable>
  );
}
