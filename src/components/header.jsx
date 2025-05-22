import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function Header(props) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (props.isEdit) {
      setInput(props.editData.todo);
    }
  }, [props.isEdit, props.editData]);

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleSubmit() {
    if (input.trim() !== "") {
      if (props.isEdit) {
        // Editing existing todo
        const updatedTodo = {
          ...props.editData,
          todo: input,
        };
        props.onSendData(updatedTodo);
      } else {
        // Adding new todo
        const newTodo = {
          id: uuidv4(),
          todo: input,
          completed: false,
        };
        props.onSendData(newTodo);
      }

      setInput("");
    } else {
      alert("Write something to submit!");
    }
  }

  return (
    <>
      <div className="text-center pt-16 pb-20 mb-6 bg-blue-600">
        <h2 className="text-6xl font-bold text-white mb-4">ToDo App</h2>
        <p className="text-white max-w-[60%] m-auto">
          The Todo App is a simple and intuitive task management tool that helps users stay organized and productive. It allows users to add, track, and manage their daily tasks efficiently.
        </p>
      </div>
      <div className="border border-[#bae1ff] shadow-2xs max-w-[50%] m-auto bg-[aliceblue] rounded-sm p-10 mb-20 mt-[-60px]">
        <input
          onChange={handleInput}
          className="w-[-webkit-fill-available] bg-[aliceblue] h-12"
          type="text"
          id="textArea"
          name="text"
          value={input}
          placeholder="Write Your Todo"
        />
        <div className="text-right">
          <button
            type="button"
            onClick={handleSubmit}
            className="px-4 py-2 rounded-md bg-[#0090ff] text-white cursor-pointer"
            id="submitButton"
          >
            {props.isEdit ? "Edit" : "Send"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
