import React from "react";

const TodosFilterTool = ({ todoFilter, setTodoFilter }) => {
  return (
    <div className="mt-4 rounded-md bg-white flex flex-row justify-center items-center py-3.5 shadow-sm text-light-darkGrayishBlue">
      {["All", "Active", "Completed"].map((filter) => {
        return (
          <button
            key={`filter-${filter}`}
            className={`text-sm mx-2 font-bold ${
              todoFilter === filter && "text-light"
            }`}
            onClick={() => setTodoFilter(filter)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
};

export default TodosFilterTool;
