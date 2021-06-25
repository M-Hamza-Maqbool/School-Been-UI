import React from 'react'
import NavBar from './pages/NavBar'
import SideBar from './pages/SideBar'
import Login from './pages/Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return (
        <Router>
          <Switch>
          <div>
              <Route path="/login">
              <Login />
              </Route>
            <Router>
            <NavBar />
            <SideBar />
            </Router>
        </div>
          </Switch>
         
        </Router>
       
    )
}

export default App
