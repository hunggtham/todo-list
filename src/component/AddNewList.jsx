import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";

const AddNewList = () => {
  const [title, setTitle] = useState("");
  const [lists, setLists] = useState(() => {
    const storedLists = localStorage.getItem("taskLists");
    return storedLists ? JSON.parse(storedLists) : [];
  });

  useEffect(() => {
    localStorage.setItem("taskLists", JSON.stringify(lists));
  }, [lists]);

  const handleAddList = () => {
    const updatedLists = [...lists];
    const newList = (
      <TaskList
        key={updatedLists.length}
        title={title}
        handleDeleteList={handleDeleteList}
        listIndex={updatedLists.length}
      />
    );
    setLists([...updatedLists, newList]);
  };

  const handleDeleteList = (index) => {
    const updatedLists = [...lists];
    updatedLists.splice(index, 1);
    setLists(updatedLists);
  };

  return (
    <>
      <h1>Task list</h1>
      <div className="box">
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="Add new Task List"
        />
        <button className="trigger" onClick={handleAddList}>
          Add
        </button>
        <br />
      </div>
      {/* render all list of to do list */}
      {lists.map((list, index) =>
        React.cloneElement(list, {
          key: index,
          handleDeleteList: handleDeleteList(index),
          listIndex: index,
        })
      )}
    </>
  );
};

export default AddNewList;
