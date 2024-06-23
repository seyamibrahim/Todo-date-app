import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Addtodo.css";
const Addtodo = ({AddnewTodo}) => {
  const [todoname, setTodoName] = useState()
  const [date, setdate] = useState()
  const handleNameChange = (e) => {
    setTodoName(e.target.value)
  };
  const handleDateChange = (e) => {
    setdate(e.target.value)
  };

  const handleAddButton = () =>{
    AddnewTodo(todoname, date);
    setTodoName("");
    setdate("");
  }
  return (
    <div className="add">
      <input type="text" placeholder="Enter Todo here" value={todoname}   onChange={handleNameChange}/>
      <input type="date" name="" id="" value={date} onChange={handleDateChange}/>
      <button
        style={{ padding: "8px 25px" }}
        type="button"
        className="btn btn-success"
        onClick={handleAddButton}
      >
        Add
      </button>
    </div>
  );
};

export default Addtodo;
