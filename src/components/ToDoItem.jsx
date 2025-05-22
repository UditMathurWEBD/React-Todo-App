import { MdDelete, MdEdit, MdChecklist } from "react-icons/md";

function ToDoItem(props) {
  function handleDelete() {
    props.getDelete(props.data.id);
  }

  function handleEdit() {
    props.getEdit(props.data.id);
  }

  function handleTodoComplete() {
    props.getCompleted(props.data.id);
  }

  return (
    <>
      <div className={ props.data.completed ? "w-[350px] border border-green-400 p-6 flex flex-col rounded-md bg-green-100" : "w-[350px] border border-blue-200 p-6 flex flex-col rounded-md bg-blue-100"}>
        {props.data.completed ?
        <div className="bg-green-100 border border-green-500 text-green-600 w-max mb-6 px-1 py-1 text-sm rounded-md">Completed</div> :  <div className="bg-orange-100 border border-orange-300 text-orange-500 w-max mb-6 px-1 py-1 text-sm rounded-md">Pending</div>}
        <p className="text-gray-500 mb-6">{props.data.todo}</p>
        <div className="flex gap-4 justify-end">
          <button
            onClick={handleTodoComplete}
            className="bg-green-500 rounded-md px-2 py-2 text-white cursor-pointer"
          >
            <MdChecklist />
          </button>
          <button
            onClick={handleDelete}
            className="bg-[#ff5d5d] rounded-md px-2 py-2 text-white cursor-pointer"
          >
            <MdDelete />
          </button>
          <button
            onClick={handleEdit}
            className="bg-orange-400 rounded-md px-2 py-2 text-white cursor-pointer"
          >
            <MdEdit />
          </button>
        </div>
      </div>
    </>
  );
}

export default ToDoItem;
