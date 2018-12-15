import React,{ Component } from 'react'
import { Input } from 'semantic-ui-react'

class TextBox extends Component {
    render() {
      return (
        <div className="textbox">
            <Input icon='search' placeholder='Search...' />
        </div>
      )
    }
  }

export default TextBox