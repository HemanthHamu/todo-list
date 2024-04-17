import React, { useEffect, useState } from 'react'
import Header from './Header'
import toast from 'react-hot-toast';
import '../styles/todo.css'
import TodoList from './TodoList';
import Footer from './Footer';
export default function Todo() {
  const [userInput,setUserInput] = useState({id:1,name:"",checked:false})
  const [todos,setTodos] = useState([]);
  const[totalTodos,setTotalTodos] = useState(0);
  const [completedTodos,setcompletedTodos] = useState(0)
  function handleSubmit(e){
    e.preventDefault();
    if(userInput.name===""){
        return toast.error("Please enter something and click on add...")
    }
    setTodos([...todos,userInput]);
    setUserInput({...userInput,id:userInput.id+1,name:""})
    setTotalTodos(totalTodos + 1);
  }
  function updateCompletedTodos(count){
    setcompletedTodos(count)
  }
  useEffect(()=>{
    console.log(todos)
  },[todos])
  return (
    <div>
        <Header/>
        <div className="child">
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Enter a Todo...' value={userInput.name}  onChange={(e) => setUserInput({...userInput,name:e.target.value})} />
              <button type='submit'>Add</button>
            </form> 
            {
              todos.map((todo) =>{
                return <TodoList 
                todo={todo} 
                key={todo.id} 
                todos={todos} 
                setTodos={setTodos} 
                totalTodos={totalTodos} 
                setTotalTodos={setTotalTodos} 
                updateCompletedTodos={updateCompletedTodos}
                userInput={userInput}
                setUserInput={setUserInput}
                />
              })
            }

            
        </div>
        <Footer totalTodos={totalTodos} completedTodos={completedTodos}/>
    </div>
  )
}
