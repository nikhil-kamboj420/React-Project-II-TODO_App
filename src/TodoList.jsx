import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({task,deleteTodo}) => {
  return (
    <section className="myUnOrderList">
      <ul>
        {task.map((curTask, index) => {
          return (
            <li key={index} className="todo-item">
              <span>{curTask}</span>
              <span>
                <IoMdCheckboxOutline/>
              </span>
              <span onClick={() => deleteTodo(curTask)}>
                <MdDeleteForever/>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
