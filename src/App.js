import React from "react"
// import MaterialTable from "material-table";
import { MessageComponent } from "./Messages"

export default function App() {
  return (
    <div className="App">
      <ConsoleTime>parent elapse time</ConsoleTime>
      <MessageComponent title="message list 1" />
      <MessageComponent title="message list 2" />
      <ConsoleTimeEnd>parent elapse time</ConsoleTimeEnd>
    </div>
  )
}
const ConsoleTime = ({ children }) => {
  console.time(children);
  return false;
};

const ConsoleTimeEnd = ({ children }) => {
  console.timeEnd(children);
  return false;
};