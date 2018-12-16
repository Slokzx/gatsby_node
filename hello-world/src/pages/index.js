import React,{ Component } from "react"
import Main from '../components/main'
import 'semantic-ui-css/semantic.min.css'
import "../pages/index.css"

class App extends Component {
    render() {
      return (
        <div className="bg">
            <Main />
        </div>
      )
    }
  }
  export default App