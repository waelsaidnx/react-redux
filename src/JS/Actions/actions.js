// src/JS/Actions/actions.js
import { ADD_TASK, EDIT_TASK, DELETE_TASK, DONE_TASK } from "../Constants/actions-types";

export const addTask =(payload)=> {
    return {
        type: ADD_TASK,
        payload
    }
}

export const EditTask = (payload) =>{
    return{
        type: EDIT_TASK,
        payload
    }
}
export const DeleteTask = (payload) =>{
    return{
        type: DELETE_TASK,
        payload
    }
}
export const DoneTask = (id) =>{
    return{
        type: DONE_TASK,
        id
    }
}
