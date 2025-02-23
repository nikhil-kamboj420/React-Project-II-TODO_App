import { useState } from "react";
import "./todo.css";
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { getLocalStorageData, setLocalStorageData } from "./TodoLocalStorageData";

// todo component
export const Todo = () => {
  //! sound effect
  const sound = new Audio("./public_notification.wav");


  // *useStates//
  const [inputValue, setInputValue] = useState("");
const [task, setTask] = useState(()=>getLocalStorageData());
  const [completedTasks, setCompletedTasks] = useState([] );

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
    setCompletedTasks((prevCompleted) => [...prevCompleted, false]);
    setInputValue("");
  };

  // *delete todo handling
  const handleDeleteTodo = (curTask) => {
    let updatedTask = task.filter((task) => task !== curTask);
    setTask(updatedTask);
    sound.play();
  };

  // *delete Alltodo handling
  const handleDeleteAll = () => {
    setTask([]);
    sound.play();
  };

  // *toggle task completion
  const handleToggleComplete = (index) => {
    setCompletedTasks((prevCompleted) => {
      const updated = [...prevCompleted];
      updated[index] = !updated[index];
      return updated;
    });
    sound.play();
  };

//* add data to Local Storage
setLocalStorageData(task);
  
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
      <TodoList
        task={task}
        deleteTodo={handleDeleteTodo}
        completedTasks={completedTasks}
        toggleComplete={handleToggleComplete}
      />
      {/* delete ALl todo  */}
      <button className="delete-All-btn" onClick={handleDeleteAll}>
        Delete All
      </button>
    </section>
  );
};
