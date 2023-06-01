import React from 'react'
import './TodoItem.css'

function TodoItem({ text, completed }) {
    return (
        <li className="todo-item">
            <button onClick={null} className="check-active"></button>
            <p>{text}</p>
            <button onClick={null} className="close-button"></button>
        </li>
    )
}

export { TodoItem };