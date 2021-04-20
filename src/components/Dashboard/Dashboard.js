
import React, { Component } from "react";
import axios from "axios";
import './Dashboard.css'


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }
  componentDidMount() {
    axios({
      url: "https://randomuser.me/api/?results=15",
      
    }).then((res) => {
      console.log(res.data.results);

      const myData = res.data.results;

      this.setState({
        persons: myData,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Employee list</h2>
        <div className="employee-catalogue">
        {this.state.persons.map((personsObject) => {
          return (
            <div key={personsObject.id} className="person">
                <div className="person-container">
                <h2>{personsObject.name.first} {personsObject.name.last}</h2>
                <h3>Username: {personsObject.login.username}</h3>
                <h3>E-mail: {personsObject.email}</h3>
                <img src={personsObject.picture.thumbnail} alt="user thumbnail"/>
                </div>
            </div>
          );
        })}
      </div>
      </div>

    );
  }
}

export default Dashboard;
