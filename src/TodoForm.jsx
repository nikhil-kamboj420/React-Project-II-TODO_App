export const TodoForm = ({ formHandle, value, inputHandle }) => {
  return (
    <section className="form">
      <form onSubmit={formHandle}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={value}
            onChange={(e) => inputHandle(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
