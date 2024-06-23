import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Todo.css'
const Todo = ({handleDelete, todoname, tododate}) => {


  return (

    <div className="container">
      <div className="row">
        <div className="col-6 name">{todoname}</div>
        <div className="col-4 d-ate">{tododate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={() => handleDelete(todoname)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
