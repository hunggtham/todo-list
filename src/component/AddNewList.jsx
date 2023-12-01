import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import styled from "styled-components";
import {
  BoxContainer,
  ButtonTrigger,
  StyledInput,
  StyledTitle,
} from "./CommonStyle";

const StyledAddNewList = styled.div`
  text-align: center;
  margin-top: 20px;
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
  };

  const handleDeleteList = (index) => {
    const updatedLists = [...lists];
    updatedLists.splice(index, 1);
    setLists(updatedLists);
    localStorage.removeItem(`tasks_${index}`);
  };
  return (
    <StyledAddNewList>
      <StyledTitle>Task list</StyledTitle>
      <BoxContainer>
        <StyledInput
          type="text"
          value={title}
          placeholder="Add new Task List"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <ButtonTrigger onClick={handleAddList}>Add</ButtonTrigger>
        <br />
      </BoxContainer>
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
    </StyledAddNewList>
  );
};

export default AddNewList;
