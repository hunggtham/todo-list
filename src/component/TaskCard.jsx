import React from "react";

const TaskCard = ({ task, handleDelete, handleComplete }) => {
  //   const { task, handleDelete, handleComplete } = props;

  return (
    <li className={task.complete ? "completed" : "incomplete"}>
      <span onClick={() => handleComplete(task.id)}>
        {task.id} - {task.name}
      </span>
      <button className="delete" onClick={() => handleDelete(task.id)}>
        x
      </button>
    </li>
  );
};

export default TaskCard;
