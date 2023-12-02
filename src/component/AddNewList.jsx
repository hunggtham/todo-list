import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import styled from "styled-components";
import {
  BoxContainer,
  ButtonTrigger,
  StyledInput,
  StyledTitle,
} from "./CommonStyle";

const ConfigBoxContainer = styled(BoxContainer)`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
`;

const StyledAddNewList = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

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
    // const newList = (
    //   <TaskList
    //     key={updatedLists.length}
    //     title={title}
    //     handleDeleteList={handleDeleteList}
    //     listIndex={updatedLists.length}
    //   />
    // );
    if (title.trim() !== "") {
      const newList = {
        key: updatedLists.length,
        props: {
          title,
          handleDeleteList: handleDeleteList(updatedLists.length),
          listIndex: updatedLists.length,
        },
      };
      setLists([...updatedLists, newList]);
      setTitle("");
    }
  };

  const handleDeleteList = (index) => {
    const updatedLists = [...lists];
    updatedLists.splice(index, 1);
    setLists(updatedLists);
    localStorage.removeItem(`tasks_${index}`);
  };
  return (
    <StyledAddNewList>
      <ConfigBoxContainer>
        <StyledTitle>Task list</StyledTitle>
        <div>
          <StyledInput
            type="text"
            value={title}
            placeholder="Add new Task List"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <ButtonTrigger onClick={handleAddList}>Add</ButtonTrigger>
        </div>

        <br />
      </ConfigBoxContainer>
      {/* render all list of to do list */}
      {/* {lists.map((list) => list)} */}
      {/* 
      {lists.map((list, index) =>
        React.cloneElement(list, {
          key: index,
          handleDeleteList: handleDeleteList(index),
          listIndex: index,
        })
      )} */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          // justifyContent: "center",
        }}
      >
        {lists &&
          lists.map((list, index) => (
            <TaskList
              key={index}
              title={list.props.title}
              handleDeleteList={() => handleDeleteList(index)}
              listIndex={index}
              setLists={setLists}
            />
          ))}
      </div>
    </StyledAddNewList>
  );
};

export default AddNewList;
