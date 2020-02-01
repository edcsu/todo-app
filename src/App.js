 import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import seedData from './seed';

function App() {
  const [todos, setTodos] = useState(seedData)

  const addToDo = title => {
    const newTodos = [...todos, { id: todos.length+1, title, completed: false}];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <Header></Header>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
            key={index} index={index} 
            todo={todo} completeTodo={completeTodo} 
            deleteTodo={deleteTodo} 
          />
        ))} 
        <TodoForm addToDo={addToDo} />
      </div>
    </div>
  );
}

export default App;
