
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTotoButton } from './CreateTotoButton';

function App() {
  return (
    <div className="App">
      <TodoCounter completed={1} total={8} />
      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTotoButton />
    </div>
  );
}

export default App;

