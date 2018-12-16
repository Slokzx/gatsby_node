import React,{ Component } from 'react'
import { Form, Button  } from 'semantic-ui-react'

class Delete extends Component {

    constructor(props){
        super(props);
        this.state={
            IDNumberDelete:0,
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onIDChange(this.state.IDNumberDelete);
        this.setState({ IDNumberDelete: ''}); 
      }

    handleChange= (e) =>{
        this.setState({ IDNumberDelete: e.target.value });
      }

    render() {
      return (
        <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='ID Number' name='IDNumberDelete' placeholder='Delete a ID number' onChange={this.handleChange}/>
        </Form.Group>
        <Button className="ui negative button" onClick={this.handleSubmit}>Delete</Button>
      </Form>
      )
    }
  }

export default Delete