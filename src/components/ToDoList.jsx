import ToDoItem from "./ToDoItem";


function ToDoList(props) {
  function getDeleteId(id) {
    props.onSendId(id);
   
  }
  function getCompletedTodoId(id){
     props.onComplete(id);
  }
  function getEditId(id){
    props.onEdit(id);
  }

  return (
    <div className="flex flex-wrap gap-8 p-8 justify-center">
      {props.list.map((todo) => (
        <ToDoItem getDelete={getDeleteId} getCompleted={getCompletedTodoId} getEdit={getEditId} key={todo.id} data={todo} />
      ))}
    </div>
  );
}

export default ToDoList;
