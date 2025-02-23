import { IoMdCheckboxOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  task,
  deleteTodo,
  completedTasks,
  toggleComplete,
}) => {
  return (
    <section className="myUnOrderList">
      <ul>
        {task.map((curTask, index) => {
          return (
            <li key={index} className="todo-item">
              <span
                className={completedTasks[index] ? "checkList" : "notCheckList"}
              >
                {curTask}
              </span>
              <span onClick={() => toggleComplete(index)}>
                <IoMdCheckboxOutline />
              </span>

              <span onClick={() => deleteTodo(curTask)}>
                <MdDeleteForever />
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
