import React from 'react'

function TodoItem(value) {
  return (
    <div>
      <label>{value.item}</label>
      <button onClick={() => value.onClickRemove(value.item)}>X</button>
    </div>
  )
}

export default TodoItem