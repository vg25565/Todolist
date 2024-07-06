import React from 'react';

export const ShowTask = ({ tasklist, setTask, edit, setEdit }) => {
  const handleEdit = (id) => {
    const selectedTadk =tasklist.find(task=>task.id===id);
   setEdit(selectedTadk);
    
  };

  const handleDelete = (id) => {
    const updatedTaskList = tasklist.filter(task => task.id !== id);
    setTask(updatedTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTask([])}>Clear All</button>
      </div>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i onClick={() => handleEdit(task.id)} className="bi bi-pencil-square"></i>
            <i onClick={() => handleDelete(task.id)} className="bi bi-trash"></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
