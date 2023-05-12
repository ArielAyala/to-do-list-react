
import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTotoButton } from './CreateTotoButton';


const defaultItems = [
  {text: 'Take course', completed: true},
  {text: 'Commit changes', completed: false},
  {text: 'Read book', completed: true},
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={1} total={8} />
      <TodoSearch />
      <TodoList>
        {defaultItems.map((item,index)=>(
          <TodoItem key={index} text={item.text} completed={item.completed} />
        ))}
      </TodoList>
      <CreateTotoButton />
    </React.Fragment>

  );
}

export default App;

