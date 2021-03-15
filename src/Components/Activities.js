
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
       
        <ul>{activitiesList}</ul>

        <h3>Create a New Activity</h3>
        <form onSubmit={this.props.addActivity}>
          <input type="text" name="date" placeholder="01/01/21" />
          <input type="text" name="name" placeholder="John" />
          <input type="text" name="activity" placeholder="Dr. Appt" />
          <input type="text" name="time" placeholder="3-4pm" />          
          <input type="submit" value="Add Activity" />
        </form>
      </div>
    );
  }
}

