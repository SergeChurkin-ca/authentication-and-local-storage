import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import useToken from './useToken';


function App() {


  const {token, setToken} = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  const Logout = () => {
      sessionStorage.clear();
      window.location.reload()
      
  }

  return (
    
    <div className="wrapper">
    <BrowserRouter>
        <Navbar />
      <div className="application">
        <h1>Application</h1>
        <button onClick={Logout}>Logout</button>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
           
          </Switch>
      </div>
      </BrowserRouter>
    </div>
   
  )
}

export default App;
