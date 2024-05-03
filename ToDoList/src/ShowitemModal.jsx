import React from "react"
import Swal from "sweetalert2";
import AddTaskModal from "./AddTaskModal";

const ShowitemModal = ({task, taskList, setTaskList}) =>{
  const handleDeleteClick =()=>{
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your task has been deleted.",
          icon: "success"
        });
      }
    });


    const newTaskList=taskList.filter((taskItem)=>taskItem.id!==task.id)
    localStorage.setItem('taskList',JSON.stringify(newTaskList))

    setTaskList(newTaskList)
  }

 

return(
    <div className="modal fade" id={"ShowitemModal"+task.id}>
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">

                    <h5 className="modal-title" 
                    id="ShowitemModalLabel"
                    >({task.id}){task.task}
                    </h5>
                    <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    ></button>
                </div>
                <div className="modal-body container"> 
                    <div className="row">
                      <p className="col text-center">
                        {task.description}
                        </p>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col text-center">
                        <i className="bi bi-geo-alt-fill"></i> {task.location}
                      </div>
                      <div className="col text-center">
                        <i className="bi bi-clock-fill"></i>{task.limit}
                      </div>
                    </div>
                </div>
                <div className="modal-footer">
                  <button 
                  className="btn btn-sm btn-outline-danger"
                  onClick={handleDeleteClick}
                  data-bs-dismiss="modal"
                  >
          <i className="bi bi-trash"></i>Delete
          </button> 
          <button 
            className="btn btn-sm btn-outline-primary"
            data-bs-target={"#AddTaskModal"+task.id}
            data-bs-toggle="modal"
          >
            <i className="bi bi-pencil-square"></i>Edit
          </button>
          <button
            type="button"
            className="btn btn-sm btn-outline-secondary"
            data-bs-dismiss="modal"
          >Close</button>
                </div>
            </div>
        </div>
    </div>
)
}

export default ShowitemModal