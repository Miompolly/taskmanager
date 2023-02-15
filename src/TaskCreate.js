import { Link, useNavigate } from "react-router-dom";
import {useState} from 'react'

function TaskCreate() {
  const [id,idchange]=useState("")
    const [taskname,tasknamechange]=useState("")
    const [worker,workerchange]=useState("")
    const [phone,phonechange]=useState("")
    const [validation,valchange]=useState(false)
    const navigate=useNavigate();
    const handlesubmit=(e)=>{
e.preventDefault();
const datas={id,taskname,worker,phone}
fetch(" http://localhost:8000/tasks",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(datas)


}).then((res)=>{
alert("Saved succefully")
navigate('/')
}).catch((err)=>{
    console.log(err.message)
})
    }
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit} >
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Task Create</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Number</label>
                                            <input disabled="disabled" value={id} className="form-control"></input>
                                        </div>
                                    </div>
                                   
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Task Name</label>
                                           
                                         <input required value={taskname} onMouseDown={(e)=>valchange(true)}  onChange={e=>tasknamechange(e.target.value)} className="form-control"></input>
                                      {taskname.length===0 && validation && <span className="text-danger">Please fill task name</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Worker</label>
                                            <input required value={worker} onMouseDown={(e)=>valchange(true)} onChange={e=>workerchange(e.target.value)} className="form-control"></input>
                                            {worker.length===0 && validation && <span className="text-danger">Please fill worker</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input required value={phone} onMouseDown={(e)=>valchange(true)}  onChange={e=>phonechange(e.target.value)}className="form-control"></input>
                                            {phone.length===0 && validation && <span className="text-danger">Please fill phone number</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to="/"className="btn btn-danger">Back</Link>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default TaskCreate