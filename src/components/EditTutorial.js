import React from 'react'
import '../assets/css/style.css'

export default function EditTutorial() {
  return (
    <div className="container">
      <h2 className="title-text">Edit a Tutorial</h2>
      <form>
        <div className="mb-1">
          <label htmlFor="title">Title</label>
          <input id="title" type="text" />
        </div>
        <div className="mb-1">
          <label htmlFor="description">Description</label>
          <input id="description" type="text"/>
        </div>
        <div className="mb-1">
          <p><span className="text-bold">Status:</span> Published</p>
        </div>
        <div>
          <button className="button bg-success mr-1 text-bold">Unpublish</button>
          <button className="button bg-danger mr-1 text-bold">Delete</button>
          <button className="button bg-primary text-bold">Update</button>
        </div>
      </form>
    </div>
  )
}
