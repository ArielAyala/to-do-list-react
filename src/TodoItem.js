import React from 'react'

function TodoItem({text, completed}) {
    return (
        <li>{completed ? '[x]' : '[ ]'}{text}</li>
    )
}

export { TodoItem };