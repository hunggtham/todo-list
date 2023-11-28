import "./App.css";
import React from "react";
import Header from "./component/Header";
import TaskList2 from "./component/TaskList2";

function App() {
  return (
    <div>
      <Header />
      {/* <TaskList /> */}
      <TaskList2 />
    </div>
  );
}

export default App;
