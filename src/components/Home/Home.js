import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';


export default function Home() {
    return (
        <div>
            <h3>Applications objectvies: testing local session storage and accessing user's API</h3>
            <h3>local server has to run on localhost:8080 for login and storing the user token </h3>
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}
