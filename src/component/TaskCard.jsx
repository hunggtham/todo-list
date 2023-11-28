/* eslint-disable react/prop-types */
import React from "react";

const TaskCard = (props) => {
  const { task, handleDelete, handleComplete } = props;

  const handleCompleteTask = () => {
    handleComplete(task.id);
  };

  return (
    <li className={task.complete ? "completed" : "incomplete"}>
      <span onClick={handleCompleteTask}>{task.name}</span>
      {/* adding time counter */}
      <button className="delete" onClick={() => handleDelete(task.id)}>
        x
      </button>
    </li>
  );
};

export default TaskCard;
