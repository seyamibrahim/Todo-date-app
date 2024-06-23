import React from 'react'
import Todo from './Todo'


const TodoItem = ({items, handleDelete}) => {
  
  return (
    <div className='' style={{textAlign: "left", margin: "30px"}}>
        {items.map(item=>{
           
            return <Todo  handleDelete = {handleDelete} todoname={item.todo} tododate = {item.dueDate}></Todo> 
        })}
      
    </div>
  )
}

export default TodoItem
