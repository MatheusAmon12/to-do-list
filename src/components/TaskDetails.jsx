import React from 'react';
import Button from './Button';
import { useNavigate, useParams } from 'react-router-dom';

import "../styles/TaskDetails.css"

const TaskDetails = () => {
    const params = useParams()
    const navigate = useNavigate()

    const handleClickButtonBack = () => {
        navigate('/')
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleClickButtonBack}>
                    Voltar
                </Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum qui ex aspernatur? Voluptatem expedita qui laudantium, debitis laborum dolor. Odio aliquid quis possimus. Saepe, nihil voluptas maiores numquam error culpa.
                </p>
            </div>
        </>

    );
}
 
export default TaskDetails;