import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import tickIcon from '../assets/tick-icon.png'; // Import the tick icon image

interface TaskProps {
  task: { id: number; text: string; completed: boolean };
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const { toggleTaskComplete, deleteTask } = useContext(TaskContext)!;

  return (
    <li
      className={`task-item ${task.completed ? 'completed' : ''}`}
      onClick={() => toggleTaskComplete(task.id)}
    >
      {task.completed && (
        <img src={tickIcon} alt="Completed" className="task-tick" />
      )}
      <span className="task-text">{task.text}</span>
      <button 
        onClick={(e) => { 
          e.stopPropagation(); 
          deleteTask(task.id); 
        }} 
        className="delete-button"
      >
        &times; {}
      </button>
    </li>
  );
};

export default Task;
