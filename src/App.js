import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';

function App() {
  // Load initial task list from localStorage or default to empty array
  const [tasklist, setTask] = useState(() => {
    const storedTasks = localStorage.getItem("tasklist");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  // State for edit task
  const [edit, setEdit] = useState({});

  // Update localStorage whenever tasklist changes
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

  return (
    <div className="App">
      <Header />
      <AddTask 
        tasklist={tasklist}
        setTask={setTask}
        edit={edit}
        setEdit={setEdit}
      />
      <ShowTask 
        tasklist={tasklist} 
        setTask={setTask} 
        edit={edit}
        setEdit={setEdit}
      />
    </div>
  );
}

export default App;
