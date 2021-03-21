import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import useToken from './useToken';


function App() {


  const {token, setToken} = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
   <BrowserRouter>
        <Navbar />
      <div className="application">
        <h1>Application</h1>
        <Switch>
            <Route path="/dashboard">
            <Dashboard />
            </Route>
          </Switch>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
