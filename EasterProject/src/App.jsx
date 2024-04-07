import { useForm } from "./Hooks/useForm"

function App() {

  const[inputsForm, handleInputChange,formReset] = useForm({
    username:"",
    password:"",
    checkbox:"",
    date:"",
    datetimelocal:"",
    email:"",
    file:"",
    image:"",
    month:"",
    number:"",
    radio:"",
    range:"",
    reset:"",
    search:"",
    tel:"",
    text:"",
    time:"",
    url:"",
    week:""
  })
  
   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("Mi nombre de usuario es ",inputsForm.username)
    console.log("Mi contarseña es ",inputsForm.password)
    formReset()
    }
  
 
  return (
    <div>
   <h1>Input List</h1>
   <hr/>
  
   <form onSubmit={(e)=>handleSubmit(e)}>
    <divs>
      <label htmlFor='username'>Username</label>
      <input 
      id="username" 
      name="username"
      type="text"
      value={inputsForm.username}
      onChange={(event)=>handleInputChange(event)}
      />
    </divs>
    <div>
      <label htmlFor='username'>Password</label>
      <input 
      id="password" 
      name="password"
      type="password"
      value={inputsForm.password}
      onChange={(event)=>handleInputChange(event)}
      /> 
    
    </div>
    
    <div>
      <label htmlFor='InputCheckbox'>Checkbox</label>
      <input 
      id="InputCheckbox" 
      name="InputCheckbox"
      type="checkbox"
      value={inputsForm.checkbox}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='InputColor'>Color</label>
      <input 
      id="InputColor" 
      name="InputColor"
      type="color"
      value={inputsForm.username}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='InputDate'>Date</label>
      <input 
      id="InputDate" 
      name="InputDate"
      type="date"
      value={inputsForm.date}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>
    
    <div>
      <label htmlFor='Input-datetime-local'>Date Time Local</label>
      <input 
      id="Input-datetime-local" 
      name="Input-datetime-local"
      type="datetime-local"
      value={inputsForm.datetimelocal}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='InputEmail'>Email</label>
      <input 
      id="InputEmail" 
      name="InputEmail"
      type="email"
      value={inputsForm.email}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='myfile'>File</label>
      <input 
      id="myfile" 
      name="myfile"
      type="file"
      value={inputsForm.file}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='InputImage'>Image</label>
      <input 
      id="InputImage" 
      name="InputImage"
      type="image" 
      src="C:\Users\HP\Documents\ImagenesSCR\Mangekyo.png" 
      width="48" 
      height="48"
      value={inputsForm.image}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='UpdateMonth'>Month</label>
      <input 
      id="UpdateMonth" 
      name="Updatemonth"
      type="month"
      value={inputsForm.month}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='Number'>Number</label>
      <input 
      id="Number" 
      name="Number"
      type="number"
      value={inputsForm.number}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='InputRadio'>Radio</label>
      <input 
      id="InputRadio" 
      name="InputRadio"
      type="radio"
      value={inputsForm.radio}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='InputRange'>Range</label>
      <input 
      id="InputRange" 
      name="InputRange"
      type="range"
      value={inputsForm.range}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='reset'>Reset</label>
      <input 
      id="reset" 
      name="reset"
      type="reset"
      value={inputsForm.reset}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='UserSearch'>Search</label>
      <input 
      id="UserSearch" 
      name="UserSearch"
      type="search"
      value={inputsForm.username}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='Numtel'>Tel</label>
      <input 
      id="Numtel" 
      name="Numtel"
      type="tel"
      value={inputsForm.tel}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='InputText'>Text</label>
      <input 
      id="InputText" 
      name="InputText"
      type="text"
      value={inputsForm.text}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='InputTime'>Time</label>
      <input 
      id="InputTime" 
      name="InputTime"
      type="time"
      value={inputsForm.time}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='InputUrl'>Url</label>
      <input 
      id="InputUrl" 
      name="InputUrl"
      type="url"
      value={inputsForm.url}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <label htmlFor='InputWeek'>Week</label>
      <input 
      id="InputWeek" 
      name="InputWeek"
      type="week"
      value={inputsForm.week}
      onChange={(event)=>handleInputChange(event)}
      /> 
    </div>

    <div>
      <button type="submit">Submit</button>
    </div>
   </form>
   </div>
  )
  }

export default App

