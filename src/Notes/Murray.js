import React from 'react'

class Murray extends React.Component {
  render() {
    return(
      <div>
        <img onMouseOver={() => {console.log("Hovered over image")}} src="https://www.fillmurray.com/200/100"/>
        <br />
        <br />
        <button onClick={() => {console.log("Iwas clicked")}}>Click</button>
      </div>
    )
  }
}

export default Murray
