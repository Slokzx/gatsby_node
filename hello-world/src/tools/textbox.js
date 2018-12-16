import React,{ Component } from 'react'
import { Form } from 'semantic-ui-react'

class TextBox extends Component {

    constructor(props){
        super(props);
        this.state={
            IDNumber:0,
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.onIDChange(this.state.IDNumber);
        this.setState({ IDNumber: ''}); 
      }

    handleChange= (e) =>{
        this.setState({ IDNumber: e.target.value });
      }

    render() {
      return (
        <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='IDNumber' name='IDNumber' placeholder='Write a ID number' onChange={this.handleChange}/>
        </Form.Group>
        <Form.Button onClick={this.handleSubmit}>Search</Form.Button>
      </Form>
      )
    }
  }

export default TextBox