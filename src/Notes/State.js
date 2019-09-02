import React, {Component} from 'react'

class App extends Component {
  constructor(){
    super()
    this.state = {
      name: "Kevin",
      age: "24"
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age} years old</h1>
      </div>
    )
  }
}
