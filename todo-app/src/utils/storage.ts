interface Task {
    id: number;
    text: string;
    completed: boolean;
  }
  
  // Function to load tasks from localStorage
  export const loadTasks = (): Task[] => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        return JSON.parse(savedTasks);
      } catch (e) {
        console.error("Error parsing tasks from localStorage", e);
        return [];
      }
    }
    return [];
  };
  
  // Function to save tasks to localStorage
  export const saveTasks = (tasks: Task[]): void => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (e) {
      console.error("Error saving tasks to localStorage", e);
    }
  };
  