import AddTodo from "./components/AddTodo";
import AppName from "./components/Appname";
import "./app.css";
import TodoItems from "./components/Todoitems";
import { act, useReducer, useState } from "react";
import WelcomeMeassage from "./components/welcomeMessage";
import TodoItemsContextProvider, {
  TodoItemsContext,
} from "./store/todo-items-store";
import Todoitem from "./components/Todoitem";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <WelcomeMeassage></WelcomeMeassage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
