import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { updateLocalStorage } from "../utils/updateLocalStorage";
import { getLocalStorage } from "../utils/getLocalStorage";

    const tasks = getLocalStorage()

    export const slice = createSlice({
        name: "tasks",
        initialState: tasks || [],
        reducers: {
            addTask(state, {payload}) {
                const tasks = [
                    ...state,
                    {
                        id: uuidv4(),
                        title: payload, 
                        completed: false
                    }
                ]
                updateLocalStorage(tasks)
                return tasks
            },
            removeTask(state, {payload}) {
                const newTasksList = state.filter(task => payload !== task.id)
                updateLocalStorage(newTasksList)
                return newTasksList
            },
            toggleTask(state, {payload}) {
                const newTasksList = state.map(task => {
                    if(task.id === payload) return {...task, completed: !task.completed}
                    return task
                })
                
                updateLocalStorage(newTasksList)
                return newTasksList
            }
        }
    })

    export const { addTask, removeTask, toggleTask } = slice.actions

    export const selectTask = state => state.tasks

    export default slice.reducer