import React from 'react';
import  { useSelector, useDispatch } from "react-redux";
import './toDo.css';
import { FaTrash } from 'react-icons/fa';
import { FaClipboardCheck } from 'react-icons/fa';
import { DeleteTask, DoneTask } from '../JS/Actions/actions';
import EditList from './EditList';

const ListItems = () => {

    const list = useSelector(state => state.reducerTask.list)
    const dispatch = useDispatch();

    return (
        <div className="TaskBox">
            {list.map((item, key)=><div className="TaskLine"
            key={key}>
                <p style={{ textDecoration:item.isDone?"line-through":null}}>
                {item.description}
                </p>
                <div className="boutons">
                <div className="done"
                onClick={()=>dispatch(DoneTask(item.id))}
                style={{color:item.isDone?"green":null}}>    
                <FaClipboardCheck />
                </div>
                <div className="edit"
                >
                <EditList item={item} />
                </div>
                <div className="Delete"
                onClick={()=>dispatch(DeleteTask(item.id))}>
                <FaTrash/>
                </div>
                </div>
                </div>)}
        </div>
    )
}

export default ListItems
