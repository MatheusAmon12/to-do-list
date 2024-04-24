import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
import { selectTask } from "../redux/taskSlice";

const Tasks = () => {
    const tasks = useSelector(selectTask)

    return(
        <>
            {
                tasks.length !== 0 ?
                    tasks.map((task) => (
                        <Task 
                            key={task.id} 
                            task={task} 
                        />
                    )) :
                    <h3 style={{ color: "#eee"}}>Não há tarefas</h3>
            }
        </>
    )
}

export default Tasks