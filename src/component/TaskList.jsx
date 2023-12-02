import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import styled from "styled-components";
import {
  BoxContainer,
  ButtonDelete,
  ButtonTrigger,
  StyledInput,
  StyledTitle,
} from "./CommonStyle";

const ConfigButtonDelete = styled(ButtonDelete)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const TaskList = (props) => {
  const { title, handleDeleteList, listIndex } = props;
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem(`tasks_${listIndex}`);
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem(`tasks_${listIndex}`, JSON.stringify(tasks));
  }, [tasks, listIndex]);

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function onDeleteList() {
    handleDeleteList(listIndex);
    localStorage.removeItem(`tasks_${listIndex}`);
  }

  function handleComplete(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  }

  function handleAdd() {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        id: Math.floor(Math.random() * 100),
        name: newTask,
        complete: false,
      };
      setTasks([...tasks, newTaskObj]);
    }
    setNewTask("");
  }

  return (
    <>
      <BoxContainer style={{ position: "relative" }}>
        <StyledTitle>{title}</StyledTitle>
        <ConfigButtonDelete onClick={onDeleteList}>x</ConfigButtonDelete>
        <StyledInput
          type="text"
          value={newTask}
          placeholder="Add new task"
          onChange={(e) => setNewTask(e.target.value)}
        />
        <ButtonTrigger onClick={handleAdd}>Add</ButtonTrigger>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleComplete={handleComplete}
          />
        ))}
      </BoxContainer>
    </>
  );
};

export default TaskList;
