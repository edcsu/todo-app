import React from 'react'

function Todo({ todo, index, completeTodo, deleteTodo}) {
    const setStyle = () => {
        return {
            textDecoration: todo.completed ? 'line-through': 'none'
        }
    }
    return (
        <div style={setStyle()} className="todo">
            {todo.title} 
            <div>
                <button className="complete-button" onClick={() => completeTodo(index)} > Complete</button>
                <button className="delete-button" onClick={() => deleteTodo(index)} > x </button>
            </div>
        </div>
    )
}

export default Todo;
