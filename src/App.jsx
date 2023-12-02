import "./App.css";
import React from "react";
import Header from "./component/Header";
import AddNewList from "./component/AddNewList";
import styled from "styled-components";

const AppContainer = styled.div``;

function App() {
  return (
    <AppContainer>
      <Header />
      <AddNewList />
    </AppContainer>
  );
}

export default App;
