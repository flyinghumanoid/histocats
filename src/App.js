import React, {Component} from "react"
import Header from "./Components/Header"
import AdR from "./Components/AdR"
import AdL from "./Components/AdL"
import Content from "./Components/Content"
import Footer from "./Components/Footer"
import Share from "./Components/Share"

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
