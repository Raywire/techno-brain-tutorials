import React from 'react'
import '../assets/css/style.css'

export default function CreateTodo() {
  return (
    <div className="container">
      <h2 className="title-text">Add a Tutorial</h2>
      <form>
        <div className="mb-1">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" />
        </div>
        <div className="mb-1">
          <label htmlFor="description">Description</label>
          <input id="description" type="text"/>
        </div>
        <div>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}
