import { useState } from "react";
import { AddCategory,GifGrid } from "./components/index";
export const GifExpertApp = function(){

    const [categories, setCategories] = useState(["One Punch"]);
    const onAddCategory = ( newCategory ) =>{
        if(categories.includes(newCategory)){
            return;
        }
        // Valorant
        setCategories([newCategory]);
    }
    return(
        <>
            {/*Titulo  */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory
            //  setCategories ={setCategories}
            onNewCategory = {function(event){
                onAddCategory(event);
            }}
             />
                { categories.map(category =>{
                    return <GifGrid 
                    key = {category} 
                    category = {category}/>
                }
                )}
        </>
        
    )
}