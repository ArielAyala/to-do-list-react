
import React from 'react';
import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoList } from './components/TodoList/TodoList';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTotoButton } from './components/CreateTodoButton/CreateTotoButton';



const defaultItems = [
  {text: 'Take course', completed: true},
  {text: 'Commit changes', completed: false},
  {text: 'Read book', completed: true},
];

const completedItems = defaultItems.filter(item => item.completed);

function App() {
  return (
    <>
      <TodoCounter completed={completedItems.length} total={defaultItems.length} />
      <TodoSearch />
      <TodoList>
        {defaultItems.map((item,index)=>(
          <TodoItem key={index} text={item.text} completed={item.completed} />
        ))}
      </TodoList>
      <CreateTotoButton />
    </>

  );
}

export default App;

