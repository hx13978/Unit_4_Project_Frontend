
import React, { Component } from "react";
import "./Activities.css";
import { FormControl } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class Activities extends Component {

  render() {
    console.log("activities", this.props.activities)
    let list = this.props.activities

    list.sort(function(a,b) {
      console.log(a.date)
      a = a.date.split('/').reverse().join('');
      console.log(b.date)
      b = b.date.split('/').reverse().join('');
      return a > b ? 1 : a < b ? -1 : 0;
   
    })
      console.log(list)
    let activitiesList = this.props.activities.map((activities) => {
      return (
        <li key={activities.id}>{activities.date}: {activities.name} {activities.activity} {activities.time}
          <Button variant="light"
            onClick={() => this.props.deleteActivity(activities.id)} 
          >
            🗑
          </Button>
        </li>

      );
    });
    return (
      <div className="activities">
        <div className="activityList">
          <h4 className="listHeader">Activity List</h4>

          <ul>{activitiesList}</ul>
        </div>

        <h5 className="createHeader">Create a New Activity</h5>
        <Form onSubmit={this.props.addActivity}>
          <Form.Group controlId="formBasicDate">
            <Form.Label>Date of Activity  (dd/mm/yyyy)</Form.Label>
            <FormControl size="sm" type="text" name="date" />
          </Form.Group>  
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <FormControl size="sm" type="text" name="name" />
          </Form.Group>
          <Form.Group controlId="formBasicActivity">
            <Form.Label>Activity</Form.Label>
            <FormControl size="sm" type="text" name="activity" />
          </Form.Group>
          <Form.Group controlId="formBasicTime">
            <Form.Label>Time</Form.Label>
            <FormControl size="sm" type="text" name="time" />
          </Form.Group>  
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

