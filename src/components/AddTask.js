
export const AddTask = ({tasklist,setTask,edit,setEdit}) => {
  const handlesubmit=(e)=>{
  e.preventDefault();
  if(edit.id){
    const date=new Date();
    const updateTask=tasklist.map((task)=>(
      task.id===edit.id?{id:edit.id,name:edit.name,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}:task
    ));
    setTask(updateTask)
    setEdit({})
  }
  else{
  const date=new Date();
  const newTask ={id:date.getTime(),
    name:e.target.task.value,
    time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
    setTask([...tasklist,newTask]);
    // e.target.reset();
    //another way to rest the search
    // e.target.task.value="";
    //another way where my task is dependent on edit
    setEdit({})
    
  }
}
  return (
  <section className="addTask">
<form action="#" onSubmit={handlesubmit}>
  <input type="text" name="task" value={edit.name||""} placeholder="Add Task" autoComplete="off" onChange={e=>setEdit({...edit,name:e.target.value})} />
  <button type="submit">{edit.id ?"Update":"Add"}</button>
</form>
  </section>
  )
}
