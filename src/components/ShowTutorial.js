import React from 'react'
import { Link } from 'react-router-dom';

export default function ShowTutorial() {
  return (
    <div>
      <h2>Tutorial</h2>
      <p><span className="text-bold">Title:</span> Tutorial Title</p>
      <p><span className="text-bold">Description:</span> Tutorial Description</p>
      <p><span className="text-bold">Status:</span> Published</p>
      <button className="button bg-warning">
        <Link to="/edit">Edit</Link>
      </button>
    </div>
  )
}
