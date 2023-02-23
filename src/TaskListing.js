import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './index.css'

function TaskListing() {
 const [taskdata,taskdatachange]=useState(null);
 const navigate=useNavigate();

      const LoadEdit=(id)=>{
          navigate("/taskmanager/edit/"+id)
      }
      const RemoveFunction=(id)=>{
if(window.confirm("Do you want to remove this task ??")){
  fetch("http://localhost:3000/tasks/"+id,{
 method:"DELETE",
}).then((res)=>{
alert("Removed succefully")
window.location.reload()
}).catch((err)=>{
 console.log(err.message)
})
}
        
  
      }
 useEffect(()=>{
  fetch("http://localhost:3000/tasks")
  .then((res)=>{
 return res.json();
  }).then((resp)=>{
    taskdatachange(resp);
  }).catch((err)=>{
    console.log(err.message)
  })
 },[])

  return (
    <div className='container'>
         
    <div className='card'>
        <div className='card-title'>
            <h2>Task Listing</h2>

        </div>
        <div className='card-body'>
          <div className='dvbtn'>
            <nav>
            <Link to="taskmanager/create" className='btn btn-success'>Add new (+)</Link>
           
            </nav>
           
          </div>
           
            <table className='table table-bordered'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <td>Number</td>
                        <td>Task Name</td>
                        <td>Worker</td>
                        <td>Phone</td>
                        <td>Action</td>

                    </tr>
                </thead>
                <tbody className='bgcolor text-dark'>
                  {
                    taskdata &&
                    taskdata.map(item=>(
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.taskname}</td>
                        <td>{item.worker}</td>
                        <td>{item.phone}</td>
                        <td><a onClick={()=>{LoadEdit(item.id)}} className="btn btn-success" >Edit</a>
                                    <a onClick={()=>{RemoveFunction(item.id)}} className="btn btn-danger">Remove</a>
                                   </td>

                      </tr>
                    ))
                  }
                </tbody>
               
                </table>

</div>
</div>

</div>
  )
}

export default TaskListing