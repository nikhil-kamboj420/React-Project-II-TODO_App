
import "./Todo.css";
import { useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const[task,setTask]=useState([]);
    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!inputValue) return;

        if(task.includes(inputValue)){
            setInputValue("");
             return;
        }
        setTask((prevTask)=>[...prevTask,inputValue]);
        setInputValue("");
    };  

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off"
                            value={inputValue}
                            onChange={(e) => handleInputChange(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">Add Task</button>
                    </div>
                </form>
            </section>
            <section className="myUnOrderList">
                <ul>
                    {
                        task.map((curTask,index)=>{
                            return <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <span><IoMdCheckboxOutline/></span>
                                <span><MdDeleteForever /></span>
                            </li>
                        })
                    }
                </ul>
            </section>
        </section>
    );
};