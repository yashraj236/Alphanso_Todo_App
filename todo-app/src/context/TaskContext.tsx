import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { loadTasks, saveTasks } from '../utils/storage';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskContextProps {
  tasks: Task[];
  addTask: (text: string) => void;
  toggleTaskComplete: (id: number) => void;
  deleteTask: (id: number) => void;
  filter: string;
  setFilter: (filter: string) => void;
}

interface TaskProviderProps {
  children: ReactNode;
}

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<string>('all');  

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTaskComplete = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTaskComplete, deleteTask, filter, setFilter }}>
      {children}
    </TaskContext.Provider>
  );
};
