import React from "react"
// import MaterialTable from "material-table";
// import { MessageComponent } from "./Messages"
import { SimpleTable } from "./SimpleTable"
import { ConsoleTime, ConsoleTimeEnd } from "./Utils"
import { GlobalStore } from "./context/GlobalStore"
import { SysMsg } from "./SysMsg"


export default function App() {
  return (
    <GlobalStore.Provider>
      <div>
        <ConsoleTime>parent</ConsoleTime>
        {/* <MessageComponent title="message list 1" /> */}
        {/* <MessageComponent title="message list 2" /> */}
        <SysMsg />
        <SimpleTable title="Simple Table 1" />
        <SimpleTable title="Simple Table 2" />
        <ConsoleTimeEnd>parent</ConsoleTimeEnd>
      </div>
    </GlobalStore.Provider>
  )
}