import "./App.css";
import React from "react";
import Header from "./component/Header";
import TaskList from "./component/TaskList";
import AddNewList from "./component/AddNewList";

function App() {
  return (
    <div>
      <Header />
      {/* <TaskList /> */}
      <AddNewList />
    </div>
  );
}

export default App;
