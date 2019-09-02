import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "blue"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    //synthetic event
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First name"
          onChange={this.handleChange}
        />
        <br/>
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="Last name"
          onChange={this.handleChange}
        />

        <textarea
          value={"Some default value"}
          onChange={this.handleChange}
        />

        <input
          type="checkbox"
          name="isFriendly"
          checked={this.state.isFriendly}
          onChange={this.handleChange}
        />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          /> Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          /> Female
        </label>
        <br/>

        <select
          value={this.state.favColor}
          onChange={this.handleChange}
          name="favColor"
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="white">White</option>
        </select>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <button>Submit</button>
      </form>
    )
  }
}
export default App
