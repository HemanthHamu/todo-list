import React from 'react'
import '../styles/footer.css'
export default function Footer({totalTodos,completedTodos}) {
  return (
    <div className='footer-container'>
        <h2>Total Todos : {totalTodos}</h2>
        <h2>Completed Todos : {completedTodos} </h2>
    </div>
  )
}
