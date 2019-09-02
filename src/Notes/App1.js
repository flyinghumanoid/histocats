import React,{Component} from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'
import './style.css'

class App extends Component{
  constructor () {
    super()
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const componentsTodo = this.state.todos.map(item => <TodoItem key={item.id} todo={item} handleChange={this.handleChange}/>)

    return(
      <div className="todo-list">
        {componentsTodo}
      </div>
    )
  }

}

export default App
