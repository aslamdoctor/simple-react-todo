const TodoList = ({ tasks, handleDelete }) => {
  return (
    <div className="todo-list">
      <ul className="mb-2">
        {tasks.map((task) => (
          <li
            className="mb-2"
            key={task.id}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              <span>{task.task}</span>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-auto rounded"
                onClick={(e) => handleDelete(task.id, e)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
