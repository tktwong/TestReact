import React from 'react';
import { ConsoleTime, ConsoleTimeEnd } from "./Utils"
import { GlobalStore } from "./context/GlobalStore"

export function SysMsg() {
    const { sysMsg } = GlobalStore.useContainer();
    return (<>
        <ConsoleTime>System Message</ConsoleTime><div className="App-error">{sysMsg}</div>
        <ConsoleTimeEnd>System Message</ConsoleTimeEnd></>)
}