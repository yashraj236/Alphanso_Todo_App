import React, { useContext, useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Search from './components/Search';
import { TaskContext } from './context/TaskContext';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { filter, setFilter } = useContext(TaskContext)!;

  return (
    <div className="app-container">
      <div className="header-container">
        <h1>Today</h1>
        <Search setSearchTerm={setSearchTerm} />
        <div className="filter-buttons">
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={filter === 'completed' ? 'active' : ''}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
          <button
            className={filter === 'incomplete' ? 'active' : ''}
            onClick={() => setFilter('incomplete')}
          >
            Incomplete
          </button>
        </div>
      </div>
      <TaskForm />
      <TaskList searchTerm={searchTerm} />
    </div>
  );
};

export default App;
