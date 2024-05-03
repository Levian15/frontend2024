import React from "react"
import ShowitemModal from "./ShowitemModal"
import AddTaskModal from "./AddTaskModal"
const Listitem = ({task, taskList, setTaskList}) =>{

return(
    <div>
    <div className="row m-2">
    <div className="col-6">
      <ShowitemModal 
      task={task}
      taskList={taskList}
      setTaskList={setTaskList}
      />
    <AddTaskModal
    task={task}
    taskList={taskList}
    setTaskList={setTaskList}
    />

      <input type="checkbox"/>
          <button 
          className="btn btn-link"
          data-bs-toggle="modal"
          data-bs-target={"#ShowitemModal"+task.id}
          >{task.task}</button>
        </div>
        <div className="col-3">
          {task.limit}
        </div>
        <div className="col">
         {task.location}
        </div>
        
        </div>
        </div>

)
}

export default Listitem