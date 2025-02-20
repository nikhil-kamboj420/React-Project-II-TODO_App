import { useState } from "react";
import "./Todo.css";
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";

// todo component

export const Todo = () => {

    //! sound effect
const sound = new Audio("./public_notification.wav")

  // *useStates//
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  // *input handling
  const handleInputChange = (value) => {
    setInputValue(value);
  };

  // *form handling
  const handleFormSubmit = (e) => {
    sound.play();
    e.preventDefault();
    if (!inputValue) return;

    if (task.includes(inputValue)) {
      setInputValue("");
      sound.play();
      return;
    }
    setTask((prevTask) => [...prevTask, inputValue]);
    setInputValue("");
  };

  // *delete todo handling

  const handleDeleteTodo = (curTask) => {
    let updatedTask = task.filter((task) => task !== curTask);
    setTask(updatedTask);
  };
  // *delete Alltodo handling
  const handleDeleteAll = () => {
    setTask([]);
    sound.play();
  };

  return (
    // todo container
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        {/* date component */}
        <TodoDate />
      </header>
      {/*from  component*/}
      <TodoForm
        formHandle={handleFormSubmit}
        inputHandle={handleInputChange}
        value={inputValue}
      />

      {/* list component */}
      <TodoList task={task} deleteTodo={handleDeleteTodo} />
      {/* delete ALl todo  */}
      <button className="delete-All-btn" onClick={handleDeleteAll}>
        Delete All
      </button>
    </section>
  );
};
