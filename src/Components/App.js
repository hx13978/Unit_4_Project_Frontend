import React, { Component } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import Activities from "./Activities";

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
    axios.get(`${backendUrl}`).then((response) => {
      this.setState({
        activities: response.data.activities,
      });
    });
  }

  

  render() {
        console.log(this.state.activities);
    return (
      <div className="App">
        <h1>All Activities</h1>

        <Route path="/" render={(routerProps) =>
            <Activities {...this.state} {...routerProps} />
          }>
        </Route>
      </div>
    );
  }
}
