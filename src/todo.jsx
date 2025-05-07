import { useState } from "react";

export const Todo =()=>{

    const todolist = ['hai', 'like', 'english', 'science']
    const [value, setValue] = useState("");

    const [items, setItems] = useState(todolist);
    


    function inputChange(event){
        const newItem = event.target.value;
        setValue(newItem);
    }

    function addtodo(){
        const newitems =[...items, value];
        setItems(newitems);  
    }
    
    return (
    <div>
        <h1>todo list</h1>

        <input type='text' placeholder="Add a new task" onChange={inputChange}></input>
        
        <button onClick={addtodo}>Add</button>
        <ul>
            {items.map((item)=>{
                return(
                    <li>{item }</li>
                )
             })}
        </ul>
    </div>
    );
}