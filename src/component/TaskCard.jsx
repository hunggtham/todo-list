/* eslint-disable react/prop-types */
import React from "react";

const TaskCard = (props) => {
  const { task, handleDeleteTask, handleComplete } = props;

  const handleCompleteTask = () => {
    handleComplete(task.id);
  };

  return (
    <li className={task.complete ? "completed" : "incomplete"}>
      <span onClick={handleCompleteTask}>{task.name}</span>
      {/* adding time counter */}
      <button className="delete" onClick={() => handleDeleteTask(task.id)}>
        x
      </button>
    </li>
  );
};

export default TaskCard;
