import React from 'react'
import { useState ,useEffect} from 'react'
import '../Component/Page.css'
import Task from '../Component/Task'

const Page = () => {

const initialArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

  const [tasks,setTasks] = useState(initialArray)
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")

  const deleteHandle = (index) =>{
    const filteredArray = tasks.filter((item,idx)=>{
      return idx !== index
    })
    setTasks(filteredArray)

  }

  const submitHandler = (e) => {
    e.preventDefault();
    setDescription("")
    setTitle("")
    setTasks([...tasks, {title,description}])
  }

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }, [tasks])
  

  return (
    <div className="container">
        <h1>DAILY GOALS</h1>
        <form  onSubmit={submitHandler}>
          <input type="text" placeholder='Title'
          value={title} 
          onChange={(e)=> setTitle(e.target.value)}/>

          <textarea placeholder='Description' 
          value={description}
          onChange={(e)=> setDescription(e.target.value)}
          ></textarea>
          <button type='submit'>ADD</button>
        </form>
          {tasks.map((item,index)=>(
            <Task key={index} 
            title={item.title} 
            description={item.description}
            deleteHandle={deleteHandle}
            index={index}
            />
          ))}
          
        
    </div>
  )
}

export default Page