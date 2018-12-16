import React,{ Component } from 'react'
import {Table } from 'semantic-ui-react'

class TableExample extends Component {
    render() {
      return (
        <div className="table">
            <Table celled>
                <Table.Header>
                    <Table.Row> 
                        <Table.HeaderCell>Student ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Contact</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {!!this.props.tableData && this.props.tableData.map((data,index) => {
                    return (
                        <Table.Row key={index}>
                            <Table.Cell>{data.id}</Table.Cell>
                            <Table.Cell>{data.fname}</Table.Cell>
                            <Table.Cell>{data.lname}</Table.Cell>
                            <Table.Cell>{data.contact}</Table.Cell>
                            <Table.Cell>{data.email}</Table.Cell>
                        </Table.Row>
                    )
                })}
                </Table.Body>
            </Table>
        </div>
      )
    }
  }

export default TableExample