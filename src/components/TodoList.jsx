import React, { useState } from 'react'
import '../styles/todolist.css'
import toast from 'react-hot-toast'
export default function TodoList({todo,todos,setTodos,updateCompletedTodos,totalTodos,setTotalTodos,userInput,setUserInput}) {
  const [isChecked,setIsChecked] = useState(todo.checked)
  function deleteTodo(current){
    return current !== todo
  }
  function handleDelete(){
    setTodos(todos.filter(deleteTodo));
    setTotalTodos(totalTodos - 1);
    setUserInput({...userInput,id:userInput.id-1})
    toast.success("Todo Deleted Successfully")
  }
  function handleCheck(todoName){
    setIsChecked(!isChecked);
    const checkedTodos = todos.map((ele) => {
      return ele.name === todoName ? {...ele,checked:!ele.checked} : ele
    })
    console.log(checkedTodos)
    setTodos(checkedTodos);
    updateCompletedTodos(checkedTodos.filter((ele) => ele.checked).length)
  }
  const checked = isChecked ? "checked" : ""
  return (
    <div className='todolist-container'>
        <p>{todo.id}.{todo.name}</p>
        <span className={`check-icon-container ${checked}`} onClick={() => handleCheck(todo.name)}>
          <i className="fa-solid fa-check"></i>
        </span>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
