import React from "react"
// import MaterialTable from "material-table";
// import { MessageComponent } from "./Messages"
import { SimpleTable } from "./SimpleTable"
import { ConsoleTime, ConsoleTimeEnd } from "./Utils"


export default function App() {
  return (
    <div className="App">
      <ConsoleTime>parent</ConsoleTime>
      {/* <MessageComponent title="message list 1" /> */}
      {/* <MessageComponent title="message list 2" /> */}
      <SimpleTable title="Simple Table 1" />
      <SimpleTable title="Simple Table 2" />
      <ConsoleTimeEnd>parent</ConsoleTimeEnd>
    </div>
  )
}