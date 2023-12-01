import React, { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

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
      <ul>
        <p className="tasklist-title">{title}</p>
        <button className="delete" onClick={onDeleteList}>
          x
        </button>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="trigger" onClick={handleAdd}>
          Add
        </button>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            handleDeleteTask={handleDeleteTask}
            handleComplete={handleComplete}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
