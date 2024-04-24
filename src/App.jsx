import React from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

import "./styles/App.css"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Header from "./components/Header"
import TaskDetails from "./components/TaskDetails"

const App = () => {
  return(
    <div className="container">
      <Header />
      <Router>
        <Routes>
          <Route path="/" 
            element={
              <>
                <AddTask />
                <Tasks />
              </>
            } 
          />
          <Route path="/:taskTitle" element={<TaskDetails />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App