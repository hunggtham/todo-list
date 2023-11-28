import React, { useState } from "react";
import TaskList from "./TaskList";

const TaskList2 = () => {
  const [title, setTitle] = useState("");
  const [lists, setLists] = useState([]);

  const handleAddList = () => {
    const newList = <TaskList key={lists.length} />;
    setLists([...lists, newList]);
  };
  console.log("title", title);
  console.log("list", lists);
  return (
    <>
      <h1>Task list</h1>
      <div className="box">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add new Task List"
        />
        <button className="trigger" onClick={() => handleAddList()}>
          Add
        </button>
        <br />
      </div>

      {lists.map((list) => list)}
    </>
  );
};

export default TaskList2;
