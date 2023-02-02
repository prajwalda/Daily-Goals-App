import React from 'react'

const Task = ({title,description,index,deleteHandle}) => {
  return (
    <div className='task'>
        
    <div>
        <p>{title}</p>
        <span>{description}</span>
    </div>
    <button onClick={()=>deleteHandle(index)}>-</button>
    </div>
  )
}

export default Task