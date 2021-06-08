import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTodosFilter, setTodosFilter } from "../redux/todosFilterSlice";

export default function TodosFilterTool() {
  const todosFilter = useSelector(selectTodosFilter);
  const dispatch = useDispatch();

  const handleSetTodosFilter = (filter) => {
    dispatch(setTodosFilter(filter));
  };

  return ["All", "Active", "Completed"].map((filter) => {
    return (
      <button
        key={`filter-${filter}`}
        className={`text-sm mx-2 font-bold hover:text-light-veryDarkGrayishBlue ${
          todosFilter === filter ? "text-light" : "text-light-darkGrayishBlue"
        }`}
        onClick={() => handleSetTodosFilter(filter)}
      >
        {filter}
      </button>
    );
  });
}
