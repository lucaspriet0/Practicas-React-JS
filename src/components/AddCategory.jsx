import React from "react";
import { useState } from "react";

export const AddCategory = ({onNewCatrgory}) => {

    const [inputValue, setInputValue] = useState("") 

    const inputChange = ({target}) => {
    
        setInputValue(target.value)
    }

    const formSubmit = (event) => {
        event.preventDefault()

        if (inputValue.trim().length <= 1) return
        
        onNewCatrgory(inputValue.trim())
        setInputValue("")
    }

    return (

        <form onSubmit={formSubmit}>

        <input
          type = 'text'
          placeholder = "Bucar gifs"
          value = {inputValue} 
          onChange = {inputChange}
        
        />
        </form>  
    )
}