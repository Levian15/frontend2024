import React from "react"
import Listitem from "./Listitem"

const List=({tasklist, setTaskList})=>{
return (
<div> 
<div className="row m-2">
<div className="col-6">
<h4>Task</h4>
</div>
<div className="col-3">
<h4>Limit</h4>
</div>
<div className="col">
<h4>Location</h4>
</div>

</div>

{
tasklist.map((task)=>{
    return(
        <Listitem
        key={task.id}
        task={task}
        taskList={tasklist}
        setTaskList={setTaskList}
        />
    )
})
}
</div>
)}

 export default List   