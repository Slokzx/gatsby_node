import React,{ Component } from "react"
import TextBox from "../tools/textbox"
import Table from "../tools/table"
import StudentForm from "../tools/forms"
import Delete from "../tools/delete"
import { Header } from 'semantic-ui-react'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

componentDidMount() {
  fetch('http://10.0.0.116:1234/api/students/getStudents')
    .then(response => response.json())
    .then(jsonData => {
        this.setState({ data: jsonData });
    })
    .catch(e => console.log("There is an error at initial fetch"));
}

handleChange = (e) => {
  fetch('http://10.0.0.116:1234/api/students/getStudents?id='+ e)
  .then(response => response.json())
  .then(jsonData => {
      this.setState({ data: jsonData });
  })
  .catch(e => console.log("There is a error while fetching that id"));
}

handleDelete = (e) => {
  fetch('http://10.0.0.116:1234/api/students/getStudents?id='+ e, {
        method: 'DELETE'
      })
  .catch(e => console.log("There is an error while deleting"));
}

render() {
  return (
    <div className="ui left aligned segment container" style={{"height":"100"}}>
        <Header size='large'>Enter a Student ID</Header>
        <TextBox onIDChange={this.handleChange}/>
        <br></br>
        <Header size='large'>Add a student</Header>
        <StudentForm />
        <br></br>
        <Header size='large'>Delete a student</Header>
        <Delete onIDdelete={this.handleDelete}/>
        <br></br>
        <Header size='large'>Student Details</Header>
        <Table tableData={this.state.data}/>
        <br></br>
    </div>
    )
  }
}
  export default Main