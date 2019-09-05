import React, {Component} from "react"
import Header from "./Components/Header"
import Content from "./Components/Content"
import Footer from "./Components/Footer"

class App extends Component {
  render(){
    return (
      <div className="container">
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App
