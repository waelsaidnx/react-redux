//src/JS/Reducers/rootReducers.js
import { ADD_TASK, EDIT_TASK, DELETE_TASK, DONE_TASK } from "../Constants/actions-types";

const initialState={
    list:[]
}

const reducerTask=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_TASK:
            return { ...state, list: [...state.list, action.payload] }
        case EDIT_TASK:
            return {...state, list:state.list.map(el => el.id==action.payload.id? { ...el, description: action.payload.description} : el)}
        case DELETE_TASK:
            return {...state, list:state.list.filter(el=>el.id!==action.payload)}
        case DONE_TASK:
            return { ...state, list: state.list.map(el => el.id === action.id ? { ...el, isDone: !el.isDone } : el) }
        default:
            return state;
    }
}

export default reducerTask