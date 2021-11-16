import React from 'react'
import './toDo.css'
import {useState} from "react"; 
import {useDispatch} from "react-redux";
import { addTask } from '../JS/Actions/actions';

const AddItems = () => {

    const [myInput, setMyInput] = useState("")

    const dispatch=useDispatch()

    const add =(e)=>{
        if(myInput){
        e.preventDefault();    
        dispatch(addTask({description: myInput, id:Date.now(), isDone: false}));
        setMyInput("");
        }
        else{
            e.preventDefault();
            alert("wrong input");
        }
    }

    return (
        <div>
            <form 
                className="todoBox"
                onSubmit={add}>
                <input className="typeTask" 
                placeHolder="type your task here"
                onChange={(e)=> setMyInput(e.target.value)}
                value={myInput}
                >
                </input>
                <button 
                    className="addBut"
                    onClick={add}
                    >Add Task
                </button>
            </form>
        </div>
    )
}

export default AddItems
