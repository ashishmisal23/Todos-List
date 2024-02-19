import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  let myStyle = {
    display: "grid",
    gridTemplateColumns: "2fr  3fr 2fr",
    width: "100%"
  }

  return (
    <div className='my-2 container-items' style={myStyle}>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
      <div className="container" style={{display:"flex", justifyContent:"right"}}>
        <button className='btn btn-sm btn-danger' onClick={() => onDelete(todo)}>Delete</button>
      </div>
    </div>
  )
}
