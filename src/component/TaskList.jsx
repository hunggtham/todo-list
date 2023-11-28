import React, { useState } from "react";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const [newTask, setNewTask] = useState();
  const [tasks, setTasks] = useState([
    { id: 222, name: "Learning React", complete: true },
    { id: 333, name: "Practice React", complete: false },
    { id: 444, name: "Working with React", complete: true },
  ]);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id != id));
  }

  function handleComplete(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    );
  }

  function handleAdd() {
    if (newTask.trim() != "") {
      const newTaskObj = {
        id: Date.now(),
        name: newTask,
        complete: false,
      };
      setTasks([...tasks, newTaskObj]);
    }
    setNewTask("");
  }

  return (
    <>
      {/* <h1>Task list</h1> */}
      {/* <div className="box">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="trigger" onClick={handleAdd}>
          Add
        </button>
        <br />
      </div> */}
      <ul>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        ))}
      </ul>
    </>
  );
};

export default TaskList;
