import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm: React.FC = () => {
  const [taskText, setTaskText] = useState('');
  const { addTask } = useContext(TaskContext)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskText.trim() === '') return; 
    addTask(taskText);
    setTaskText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="Add a new task"
          className="task-input"
        />
      </form>
      <button onClick={handleSubmit} className="task-button">
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
