import React,{ Component } from "react"
import TextBox from "../tools/textbox"
import Table from "../tools/table"

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
    .catch(e => console.log("There is a error at initial fetch"));
}

handleChange = (e) => {
  fetch('http://10.0.0.116:1234/api/students/getStudents?id='+ e)
  .then(response => response.json())
  .then(jsonData => {
      this.setState({ data: jsonData });
  })
  .catch(e => console.log("There is a error"));
}

render() {
  return (
    <div>
        <p>Enter a Student ID</p>
        <TextBox onIDChange={this.handleChange}/>
        <br></br>
        <p>Below are the table information on the searched student</p>
        <Table tableData={this.state.data}/>
    </div>
    )
  }
}
  export default Main