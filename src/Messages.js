import React, { useState } from "react"
import { ConsoleTime, ConsoleTimeEnd } from "./Utils"

export function MessageComponent({ title }) {

    const [messages, setMessages] = useState([])

    const _getLastMessage = () => messages && messages[messages.length - 1]

    const _onMessageChange = (event) => {
        setMessages([...messages, event.target.value])
    }

    return (
        <div>
            <ConsoleTime>{title}</ConsoleTime>
            <h1>{title}</h1>
            <input
                type="text"
                value={_getLastMessage() || ""}
                onChange={_onMessageChange}
                style={{ margin: "10px" }}
            />
            <MessageList messages={messages} />
            <ConsoleTimeEnd>{title}</ConsoleTimeEnd>
        </div>
    )

}

const MessageList = ({ messages }) => {
    return (
        <ul>
            {messages.map((m, i) => <Message key={i} message={m} />)}
        </ul>
    )
}

const Message = ({ message }) => {
    return (<li style={{ margin: "10px" }}> {message} </li>)
}