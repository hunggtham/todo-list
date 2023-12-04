import "./App.css";
import React from "react";
import Header from "./component/Header";
import AddNewList from "./component/AddNewList";
import styled from "styled-components";

const AppContainer = styled.div`
  background-image: url("/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 98vh;
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <AddNewList />
    </AppContainer>
  );
}

export default App;
