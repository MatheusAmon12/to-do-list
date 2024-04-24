import React, { useState } from 'react';

import "../styles/AddTask.css"
import Button from './Button';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const AddTask = () => {
    const [inputData, setInputData] = useState('')

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        dispatch(addTask(inputData))
        setInputData("")
    }

    return ( 
        <div className='add-task-container'>
            <input onChange={handleInputChange} value={inputData} type="text" className='add-task-input' />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default AddTask;