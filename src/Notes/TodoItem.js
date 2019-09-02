import React from 'react'

function TodoItem(props) {
  //3:23:40
  let style

  if(!props.todo.completed)
  {
    style = {
      color: "#000000"
    }
  } else {
    style = {
      color: "#d0d0d0",
      fontStyle: "italic"
    }
  }

  return (
    <div className="todo-item">
      <input type="checkbox"
            checked={props.todo.completed}
            onChange={() => {props.handleChange(props.todo.id)}}
            />
      <p style={style}>{props.todo.text}</p>
    </div>
  )
}

export default TodoItem
