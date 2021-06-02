import React from "react";

const TodosFilterTool = ({ todoFilter, setTodoFilter }) => {
  return (
    // <div className="">
    ["All", "Active", "Completed"].map((filter) => {
      return (
        <button
          key={`filter-${filter}`}
          className={`text-sm mx-2 font-bold hover:text-light-veryDarkGrayishBlue ${
            todoFilter === filter ? "text-light" : " text-light-darkGrayishBlue"
          }`}
          onClick={() => setTodoFilter(filter)}
        >
          {filter}
        </button>
      );
    })
    // </div>
  );
};

export default TodosFilterTool;
