import './App.css';
import { useEffect, useState } from 'react';
import CardList from './components/CardList';

function App() {
  const [state,setState] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setState(users))
  },[]);

  return (
    <div className="App">
      <input className="input" type='search' placeholder = 'search monsters' onChange={e => setInput(e.target.value)}/> 
      <p>{input}</p>
      <CardList input={input} state={state}/>
    </div>
  );
}

export default App;
