import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class StudentForm extends Component {
  state = {
        ID: 0,
        FirstName: '',
        LastName: '',
        Contact: 0,
        Email: ''
  }

  handleChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
  }
  

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='ID' name='ID' placeholder='ID' onChange={this.handleChange} />
          <Form.Input fluid label='First Name' name='FirstName' placeholder='First Name' onChange={this.handleChange} />
          <Form.Input fluid label='Last Name' name='LastName'placeholder='Last Name' onChange={this.handleChange} />
          <Form.Input fluid label='Contact' name='Contact' placeholder='Contact' onChange={this.handleChange} />
          <Form.Input fluid label='Email' name='Email'placeholder='Email' onChange={this.handleChange} />
        </Form.Group>
        <Form.Button onSubmit={this.handleSubmit}>Submit</Form.Button>
      </Form>
    )
  }
}

export default StudentForm