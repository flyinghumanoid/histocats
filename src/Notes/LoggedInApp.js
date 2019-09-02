import React from 'react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loggedIn: false
    }
    this.flip = this.flip.bind(this)
  }

  flip(){
    console.log(this.state.loggedIn)
    this.setState(prevState => {
      return {
        loggedIn: !prevState.loggedIn
      }
    })
  }

  render(){
    let buttonText = this.state.loggedIn ? "Log Out" : "Log In"
    let displayText = this.state.loggedIn ? "Logged in" : "Logged out"
    return(
      <div>
        <button onClick={this.flip}>{buttonText}</button>
        <h1>{displayText}</h1>
      </div>
    )
  }
}

export default App
