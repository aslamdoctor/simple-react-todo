const TodoForm = (props) => {
  return (
    <div className="todo-form">
      <form
        className="mb-4"
        onSubmit={props.handleCreate}
      >
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="todo-input"
        >
          Add new task
        </label>
        <div className="flex">
          <input
            className="appearance-none border border-gray-300 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todo-input"
            type="text"
            placeholder="Enter a new task"
            required
            value={props.task}
            onChange={props.handleTaskChange}
            onKeyUp={props.handleTaskChange}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
