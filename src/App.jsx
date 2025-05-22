import { use, useState } from "react";
import Header from "./components/header";
import ToDoItem from "./components/ToDoItem";
import ToDoList from "./components/ToDoList";

function App() {
  const [isEditing , setIsEdit] = useState(false);
  const [editData,setEditData] = useState({});
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      todo: "Yes! There are several popular icon libraries for React via npm. Here are the best ones with usage examples",
      completed: true,
    },
    {
      id: 2,
      todo: "Another Todo to test delete",
      completed: false,
    },
  ]);

function addTodos(newTodo) {
  if (isEditing) {
    // Edit existing todo
    const updatedList = todoList.map((todo) =>
      todo.id === newTodo.id ? newTodo : todo
    );
    setTodoList(updatedList);
    setIsEdit(false);
    setEditData({});
  } else {
    // Add new todo
    setTodoList([newTodo, ...todoList]);
  }
}

  function handleDelete(id) {
    const filteredList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredList);
  }

function handleCompletedTask(id) {
  const updatedList = todoList.map((todo) =>
    todo.id === id ? { ...todo, completed: true } : todo
  );
  setTodoList(updatedList);
}

function handleEditTask(id){
  console.log(id);
  setIsEdit(true);
  const editableData = todoList.filter(todo=> todo.id == id);
  console.log(editableData);
  setEditData(editableData[0]);
}


  return (
    <>
      <Header onSendData={addTodos}  isEdit={isEditing} editData={editData}/>
      <ToDoList onSendId={handleDelete} onComplete={handleCompletedTask} onEdit={handleEditTask} list={todoList} />
    </>
  );
}

export default App;
