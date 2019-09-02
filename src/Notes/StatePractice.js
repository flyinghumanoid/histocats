import React,{Component} from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }
  render()
  {
    let logment

    {this.state.isLoggedIn} ? logment = "in" : logment = "out"

    return (
      <div>
        <h1>You are currently logged {logment}</h1>
      </div>
    )
  }

}

export default App
