import React from 'react'
import { Link } from 'react-router-dom';

export default function ShowTutorial({ tutorial }) {
  if(!tutorial) {
    return (
      <div>
        <h2>Tutorial</h2>
        <p>Select a tutorial from the list</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Tutorial</h2>
      <p><span className="text-bold">Title:</span> {tutorial.title}</p>
      <p><span className="text-bold">Description:</span> {tutorial.description}</p>
      <p><span className="text-bold">Status:</span> {tutorial.published ? 'Published' : 'Pending'}</p>
      <Link to={`/edit/${tutorial.id}`}>
        <button className="button bg-warning">
          Edit
        </button>
      </Link>
    </div>
  )
}
