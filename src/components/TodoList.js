import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodos, setTodos } from "../redux/todosSlice";
import { selectTodosFilter } from "../redux/todosFilterSlice";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Todo from "./Todo";
import TodosMenu from "./TodosMenu";

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

export default function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const todosFilter = useSelector(selectTodosFilter);

  // Note: must render Todos with local React state rather then directly from the Redux store to prevent some visual lag and bugs when dragging and dropping the todos
  const [localTodos, setLocalTodos] = useState([]);

  useEffect(() => {
    setLocalTodos(todos);
  }, [todos]);

  const handleOnDragEnd = (result) => {
    // prevent todo from throwing error when dragged out of defined container
    if (!result.destination) return;
    // update order of todos
    const updatedTodos = Array.from(localTodos);
    const [reorderedTodo] = updatedTodos.splice(result.source.index, 1);
    updatedTodos.splice(result.destination.index, 0, reorderedTodo);
    setLocalTodos(updatedTodos);
    dispatch(setTodos({ array: updatedTodos }));
  };

  return (
    <div className="mt-4 rounded-md bg-white dark:bg-dark-veryDarkDesaturatedBlue shadow-sm mobilePlus:mt-6 mobilePlus:shadow-lg">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <div
              className="todos"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {localTodos.map((todo, index) => {
                return (
                  shouldShowTodo(todo, todosFilter) && (
                    <Todo key={todo.id} index={index} todo={todo} />
                  )
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <TodosMenu />
    </div>
  );
}
