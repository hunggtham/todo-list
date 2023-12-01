/* eslint-disable react/prop-types */
import React from "react";
import { ButtonDelete, StyleLi, StyledTypography } from "./CommonStyle";

const TaskCard = (props) => {
  const { task, handleDeleteTask, handleComplete } = props;

  const handleCompleteTask = () => {
    handleComplete(task.id);
  };
  /* adding time counter */
  return (
    <>
      <StyleLi completed={task.complete}>
        <StyledTypography onClick={handleCompleteTask}>
          {task.id} - {task.name}
        </StyledTypography>

        <ButtonDelete onClick={() => handleDeleteTask(task.id)}>x</ButtonDelete>
      </StyleLi>
    </>
  );
};

export default TaskCard;
