import './App.css';
import React, { useState, useEffect } from 'react'
import Header from './componants/Header';
import { Todos } from './componants/Todos';
import { Footer } from './componants/Footer';
import { AddTodo } from './componants/AddTodo';




function App() {

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });



  const onDelete = (todo) => {
    console.log("I'm onDelete", todo);

    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((e) => e !== todo);
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const addTodo = (title, desc) => {
    console.log('I am Adding todo:', title, desc);

    let sno = 0;
    if (todos.length > 0 && todos[todos.length - 1].sno !== undefined) {
      sno = todos[todos.length - 1].sno + 1;
    } else {
      sno = 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos((prevTodos) => [...prevTodos, myTodo]);
  };


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="My Todos List" searchBar={true} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;