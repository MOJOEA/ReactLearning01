import Header from './components/Header'
import { IconA } from './components/icon'
import Image from './components/image'
import Checkbox from './components/Checkbox'
import './App.css'

import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, text: 'Learn React', isChecked: true },
    { id: 2, text: 'Build a React App', isChecked: false },
    { id: 3, text: 'Deploy the App', isChecked: false },
  ]);

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      
      Hello Tada<br />

      Now counter is {count} <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <IconA />

      <Image src="https://picsum.photos/200" alt="Placeholder Image" />
      {todoList.map((todo) => (
        <Checkbox key={todo.id} Text={todo.text} isChecked={todo.isChecked} />
      ))}

    </div>

  )
}

export default App
