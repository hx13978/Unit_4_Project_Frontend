import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Activities from "./Activities";
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";

const backendUrl =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/activities";
// const backendUrl = FOR HEROKU WHEN DONE


export default class App extends Component {
  constructor(props) {
    super();
    this.state = {
      activities: [],
    };
  }

  componentDidMount() {
    this.getActivities();
  }

  getActivities = () => {
    axios.get(`${backendUrl}`).then((response) => {
      this.setState({
        activities: response.data.activities,
      });
    });
  }

  addActivity = (e) => {
    e.preventDefault();
    axios.post(`${backendUrl}`, {
      date: e.target.date.value,
      name: e.target.name.value,
      activity: e.target.activity.value,
      time: e.target.time.value,
    }).then((response) => {
      
      let activityArray = this.state.activities;
      activityArray.push(response.data.activity);
      this.setState({
        activities: activityArray,
      });
    });
  }
  
  deleteActivity = (activityId) => {
    axios.delete(`${backendUrl}/${activityId}`).then((response) => {this.getActivities()});
  }

  render() {
        //console.log(this.state.activities);
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div>
        <Route path="/" render={(routerProps) =>
            <Activities 
            activities={this.state.activities}
            addActivity={this.addActivity}
            deleteActivity={this.deleteActivity}
            />
          }>
        </Route>
        </div>
      </div>
    );
  }
}
