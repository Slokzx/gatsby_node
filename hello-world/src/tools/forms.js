import React, { Component } from 'react'
import { Form, Button  } from 'semantic-ui-react'

class StudentForm extends Component {
  state = {
        ID: '',
        FirstName: '',
        LastName: '',
        Contact: '',
        Email: ''
  }

  handleChange = (e) =>{
    this.setState({ [e.target.name]: e.target.value });
  }
  
  handleSubmit = (e) =>{
    fetch('http://10.0.0.116:1234/api/students/addStudents', {
          headers: {
            "Content-Type": "application/json",
        },
        mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify({
            id: this.state.ID,
            fname: this.state.FirstName,
            lname: this.state.LastName,
            contact: this.state.Contact,
            email: this.state.Email
        })
      })
      .then(data => console.log(data))
      .catch(e => console.log("There is an error while Adding"));
      this.setState({
            ID: '',
            FirstName: '',
            LastName: '',
            Contact: '',
            Email: ''
      })
  }

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='ID Number' name='ID' placeholder='ID' onChange={this.handleChange} value={this.state.ID}/>
          <Form.Input fluid label='First Name' name='FirstName' placeholder='First Name' onChange={this.handleChange} value={this.state.FirstName} />
          <Form.Input fluid label='Last Name' name='LastName'placeholder='Last Name' onChange={this.handleChange} value={this.state.LastName} />
          <Form.Input fluid label='Contact' name='Contact' placeholder='Contact' onChange={this.handleChange} value={this.state.Contact} />
          <Form.Input fluid label='Email' name='Email'placeholder='Email' onChange={this.handleChange} value={this.state.Email} />
        </Form.Group>
        <Button className="ui positive button" onClick={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}

export default StudentForm