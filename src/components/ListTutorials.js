import React from 'react'
import { Link } from 'react-router-dom';
import ShowTutorial from '../components/ShowTutorial'

export default function ListTutorials() {
  return (
    <div className="container">
      <form className="search-form">
        <div>
          <input id="title" type="text" />
          <button>Search</button>
        </div>
      </form>
      <div className="mt-1 nav-link">
        <Link to="/create">
          Add a Tutorial
        </Link>
      </div>
      <div>
        <div className="float-child">
          <h2 className="title-text">Tutorials List</h2>
          <ul className="list-group">
            <li className="list-group-item">First item</li>
            <li className="list-group-item">Second item</li>
            <li className="list-group-item">Third item</li>
          </ul>
          <button className="bg-danger button">Remove All</button>
        </div>
        <div className="float-child">
          <ShowTutorial/>
        </div>
      </div>
    </div>
  )
}
