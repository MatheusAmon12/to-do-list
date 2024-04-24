export const updateLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}