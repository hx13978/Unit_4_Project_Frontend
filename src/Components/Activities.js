
import React, { Component } from "react";
import { Route, Link, Switch, Redirect } from "react-router-dom";

export default class Activities extends Component {

  render() {
    console.log(this.props)
    let activitiesList = this.props.activities.map((activities) => {
      return (
        <li key={activities.id}>{activities.date}: {activities.name} {activities.activity} {activities.time}
        </li>

      );
    });
    return (
      <div>
        <h1>List of all activities</h1>
        <ul>{activitiesList}</ul>

      </div>
    );
  }
}

