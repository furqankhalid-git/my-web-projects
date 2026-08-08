import './App.css';

import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  function addTask() {
    if (input === '') return;
    setTasks([...tasks, input]);
    setInput('');
  }

  function deleteTask(index) {
    let newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="container">
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button className="add-btn" onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;