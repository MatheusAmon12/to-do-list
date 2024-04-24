import React from "react";
import { useNavigate } from "react-router-dom"
import { CgClose, CgInfo } from  "react-icons/cg"
import { useDispatch } from "react-redux";

import "../styles/Task.css"
import { removeTask, toggleTask } from "../redux/taskSlice"

const Task = ({ task }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClickButtonDetails = (taskTitle) => {
        navigate(`${taskTitle}`)
    }

    const handleRemoveTaksClick = (taskId) => {
        dispatch(removeTask(taskId))
    }

    const handleTaskToggleClick = (taskId) => {
        dispatch(toggleTask(taskId))
    }


    return(
        <>
            <div 
                className="task-container"
                style={
                    task.completed ?
                        {borderLeft: '6px solid chartreuse', textDecoration: 'line-through'} :
                        {}
                }
            >
                <div className="task-title" onClick={() => handleTaskToggleClick(task.id)}>
                    {task.title}
                </div>

                <div className="buttons-container">
                    <button 
                        className="see-task-details-button"
                        onClick={() => handleClickButtonDetails(task.title)}
                    >
                        <CgInfo />
                    </button>
                    <button 
                        className="remove-task-button"
                        onClick={() => handleRemoveTaksClick(task.id)}
                    >
                        <CgClose />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Task     