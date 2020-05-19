import React, { useState } from "react"

export function MessageComponent({ title }) {

    const [messages, setMessages] = useState([])

    const _getLastMessage = () => messages && messages[messages.length - 1]

    const _onMessageChange = (event) => {
        setMessages([...messages, event.target.value])
    }

    return (
        <div className="App">
            <ConsoleTime>{title} elapse time</ConsoleTime>
            <input
                type="text"
                value={_getLastMessage()}
                onChange={_onMessageChange}
                style={{ margin: "10px" }}
            />
            <MessageList messages={messages} />
            <ConsoleTimeEnd>{title} elapse time</ConsoleTimeEnd>
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

const MessageList = ({ messages }) => {
    return (
        <ul>
            {messages.map((m, i) => <Message key={i} message={m} />)}
            {/* {messages.map((m, i) => <TableMessage key={i}>{m}</TableMessage>)} */}
        </ul>
    )
}

const Message = ({ message }) => {
    return (<li style={{ margin: "10px" }}> {message} </li>)
}