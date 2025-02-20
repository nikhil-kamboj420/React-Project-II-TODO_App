
import "./Todo.css";
import { useEffect, useState } from "react";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const[task,setTask]=useState([]);
    const[dateTime, setDateTime]=useState("");
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
 
    useEffect(() => {
        const interval = setInterval(() => {
            let now = new Date();
            let formattedDate = now.toLocaleDateString();
            let time = new Date().toLocaleTimeString();
            setDateTime(()=> `${formattedDate} - ${time}`) ;
 
        }, 1000);
        return () => clearInterval(interval);
    },[]);

 
    const handleDeleteTodo = (curTask)=>{
        let updatedTask = task.filter((task) => task !== curTask);
        setTask(updatedTask);

    }

    const handleDeleteAll= ()=>{
        setTask([]);
    }


    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <span className="date-time">{dateTime}</span>
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
                                <span onClick={()=>handleDeleteTodo(curTask)}><MdDeleteForever /></span>
                            </li>
                        })
                    }
                </ul>
            </section>
            <button className="delete-All-btn" onClick={handleDeleteAll}>Delete All</button>
        </section>
    );
};