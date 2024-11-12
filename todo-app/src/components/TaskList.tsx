import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import Task from './Task';

interface TaskListProps {
  searchTerm: string;
}

const TaskList: React.FC<TaskListProps> = ({ searchTerm }) => {
  const { tasks, filter } = useContext(TaskContext)!;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true; 
  }).filter(task =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className="task-list">
      {filteredTasks.length > 0 ? filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      )) : <li>No tasks available.</li>}
    </ul>
  );
};

export default TaskList;
