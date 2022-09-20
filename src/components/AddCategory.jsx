import { useState } from "react";

export const AddCategory = ({ onNewCategory}) => {

    const [inputValue, setinputValue] = useState("");

    const onInputChange = ({target:{value}}) =>{
        setinputValue(value);
    }
    const onSubmit = function(e){
        e.preventDefault();
        if(inputValue.trim().length  < 1 ) return;
        onNewCategory(inputValue.trim());
        setinputValue("");
    }
  return (
    <form onSubmit ={ onSubmit }>
        <input type="text" placeholder="Busca tu gif favorito" value={inputValue} onChange ={onInputChange}/>
    </form>
   
  )
}
