import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API_URL = 'https://69df62c9d6de26e119294a16.mockapi.io/api/v1/todo/users';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const deleteTodo = async (id) => {
    try {
      setIsLoading(true);
      await axios.delete(`${API_URL}/${id}`);
      setIsLoading(false);
      fetchTodos();
    } catch (error) {
      console.error('Error deleting todo:', error);
      setIsLoading(false);
    }
  }



  useEffect(() => {
    fetchTodos();
  }, []);

  if (isLoading) {

    return <p>Loading...</p>;

  } else {

    return (
      <div>
        <>
          {todos.map((todo) => (
            <div key={todo.id}>
              <p>ชื่อ: {todo.name}</p>
              <img src={todo.avatar} alt={todo.name} width="50" />

              <Link to={`/Edit/${todo.id}`}><button>Edit</button></Link>
              <button onClick={async () => await deleteTodo(todo.id)}>Delete</button>
            </div>
          ))}
        </>
      </div>
    );
  }
}

export default App
