import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);
    let updatedTasks = [
      ...tasks,
      {
        task: task,
        id: id,
      },
    ];
    setTasks(updatedTasks);
    setTask("");
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (id, e) => {
    let updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <TodoHeader title="Todo List" />
      <TodoForm
        handleCreate={handleCreate}
        task={task}
        handleTaskChange={handleTaskChange}
      />
      <TodoList
        tasks={tasks}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
