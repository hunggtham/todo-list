import "./App.css";
import React from "react";
import Header from "./component/Header";
import AddNewList from "./component/AddNewList";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer autoClose={600} />
    </AppContainer>
  );
}

export default App;
