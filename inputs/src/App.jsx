import { useForm } from "./Hooks/useForm"

function App() {

  const[inputsForm, handleInputChange,formReset] = useForm({
    username:"",
    password:""
  })
  
   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("Mi nombre de usuario es ",inputsForm.username)
    console.log("Mi contarseña es ",inputsForm.password)
    formReset()
    }
  
 
  return (
    <div>
   <h1>Inputs</h1>
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
      <button type="submit">Submit</button>
    </div>
   </form>
   </div>
  )
  }

export default App
