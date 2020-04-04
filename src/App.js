import React from "react";
//import logo from './logo.svg';
import "./App.css";
//import AddTask from "./components/AddTask";
import Date from "./components/Date";
import IncompleteTask from "./components/IncompleteTask";

function App() {
    return (
      <div className="App">
        <Date/>
        <IncompleteTask />
      </div>
    );
  }


export default App;
