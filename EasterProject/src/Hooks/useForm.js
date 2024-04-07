import { useState } from "react"

export const useForm = (initalState = {}) =>{
   const [values, setValues]= useState(initalState)

   const handleInputChange=({target})=>{
    setValues ({
      ...values,
      [target.name]:target.value
    }) 
   }

   const reset =()=>{
    setValues(initalState)
   }

   return [values, handleInputChange, reset]

}