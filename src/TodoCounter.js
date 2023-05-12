import React from 'react'

function TodoCounter({completed, total}) {
    return (
        <h1>{completed} items completed of {total}</h1>
    )
}

export { TodoCounter };
