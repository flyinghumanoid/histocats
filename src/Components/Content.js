import React from "react"
import CuteGreenCats from "../Data/CuteGreenCats"

class Content extends React.Component{
    constructor(){
      super()
      this.state = {
        qry: CuteGreenCats,
        clicked: false,
        interval: ""
      }
      this.clickHandle = this.clickHandle.bind(this)
    }

    clickHandle(){
      if(this.state.clicked){
        this.setState({clicked:!this.state.clicked})
        clearInterval(this.state.interval)
      } else {
        this.setState({clicked:!this.state.clicked})
        let intervalId = setInterval(() => {
          let adj, col, ani

          let openWindow = window.open("","queryWindow")

          adj = Math.floor(Math.random() * this.state.qry.adjective.length)
          col = Math.floor(Math.random() * this.state.qry.color.length)
          ani = Math.floor(Math.random() * this.state.qry.animal.length)
          openWindow = window.open("https://www.google.com/search?q="+this.state.qry.adjective[adj]+"+"+this.state.qry.color[col]+"+"+this.state.qry.animal[ani], "queryWindow").focus();
        },2000)
        this.setState({interval:intervalId})
      }
    }

    render(){
      let style= this.state.clicked ? "redButt" : "styleButt"
      let label= this.state.clicked ? "Stop the Purr" : "Purrify!"

      return(
        <div id="content">
          <button id={style} onClick={this.clickHandle}>{label}</button>
        </div>
      )
    }
}



export default Content
