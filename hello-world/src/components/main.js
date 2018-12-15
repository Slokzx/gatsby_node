import React,{ Component } from "react"
import TextBox from "../tools/textbox"
import Table from "../tools/table"

class Main extends Component {
    render() {
      return (
        <div>
            <p>Enter a Student ID</p>
            <TextBox />
            <p>Below are the table information on the searched student</p>
            <Table />
        </div>
      )
    }
  }
  export default Main