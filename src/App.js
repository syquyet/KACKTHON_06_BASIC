import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [listTodo, setListTodo] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const response = await getData();
      setListTodo(response);
    };
    fetchdata();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:8888/todo");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  console.log(1111, listTodo);
  return (
    <div className="todo-main">
      <header>
        <h1>TODO LIST</h1>
      </header>
      <div className="todo-add">
        <input type="text" placeholder="add" name="name"></input>
        <button>ADD</button>
      </div>
      <div className="todolist-content">
        <div className="todo-incomplete">
          <h3>incomplete tasks</h3>
          {listTodo.map((todo) => (
            <div className="todo-incomplete-content">
              <p>{todo.name} </p>
              <div className="content-btn">
                <button>delete</button>
                <button>edit</button>
              </div>
            </div>
          ))}
          ;
        </div>
        <div className="todo-complete">
          <h3>complete tasks</h3>
          {listTodo.map((todo) => (
            <div className="todo-incomplete-content">
              <p>{todo.name} </p>
              <div className="content-btn">
                <button>delete</button>
                <button>edit</button>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
}

export default App;
