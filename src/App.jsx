import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import TodoItem from "./components/TodoItems";
import Welcome from "./components/Welcome";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useState } from "react";
function App() {

  
  const [todos, settodos] = useState([]);

  const handleAdd = (todoname, tododate)=>{
    console.log(`New todo Added : ${todoname} Date : ${tododate}`)
    const newtodos = [...todos,  {todo: todoname, dueDate : tododate}];
    settodos(newtodos);
  }
  const handleDelete = (todoname) =>{
    const newtodos = todos.filter((item) => {
      item.todo != todoname;
  });
    settodos(newtodos);
   
  }
  return <>
  <div className="cont">
    <AppName/>
    <Addtodo AddnewTodo={handleAdd}></Addtodo>
    {todos.length === 0 && <Welcome></Welcome>}
    <TodoItem handleDelete={handleDelete} items = {todos}></TodoItem>
  </div>
  </>
}
export default App;
