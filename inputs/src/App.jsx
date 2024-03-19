import { useState } from 'react'



function App() {
  
  const[inputForm, setInputForm, setUsername]= useState({
   username:"",
   password:""
  })
 

  const handleInputChange=(event)=>{
    setInputForm({
      ...inputForm,
      [event.target.name]:event.target.value,
    })
   }

   const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("Mi nombre de usuario es ",inputForm.username)
    console.log("Mi contarseña es ",inputForm.password)
    setInputForm({
      username:"",
      password:""
    })
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
      value={inputForm.username}
      onChange={(event)=>handleInputChange(event)}
      />
    </divs>
    <div>
      <label htmlFor='username'>Password</label>
      <input 
      id="password" 
      name="password"
      type="password"
      value={inputForm.password}
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
