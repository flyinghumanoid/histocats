import React, {Component} from "react"
class App extends Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      kosher: "",
      halal: "",
      vegan: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  handleSubmit(event){
    alert(this.state.firstName)
  }

  render(){
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={this.handleChange}
             /><br />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
             /><br />
          <input
            type="number"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleChange} /><br />

          {/*create radio buttons for gender ehre*/}
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />Male
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />Female
          </label>
          <br />
          {/*create select box for location*/}
          <label>
          <select
            value={this.state.location}
            onChange={this.handleChange}
            name="location"
          >
            <option value="Denver">Denver</option>
            <option value="Austin">Austin</option>
            <option value="Seattle">Seattle</option>
          </select>Location
          </label>
          <br />
          {/*checkboxes*/}
          <label>
          Diet
          <br />
            <input
              type="checkbox"
              name="kosher"
              value="Kosher"
              checked={this.state.kosher}
              onChange={this.handleChange}
            /> Kosher
            <input
              type="checkbox"
              name="halal"
              value="Halal"
              checked={this.state.halal}
              onChange={this.handleChange}
            /> Halal
            <input
              type="checkbox"
              name="vegan"
              value="Vegan"
              checked={this.state.vegan}
              onChange={this.handleChange}
            /> Vegan
          </label>
          <button>Click</button>
        </form>
        <h1>{this.state.firstName} {this.state.lastName}, you are {this.state.age} years old. You are {this.state.gender} and live in {this.state.location}.</h1>
      </main>
    )
  }
}
export default App
