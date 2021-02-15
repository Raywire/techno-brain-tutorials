import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="p-1 nav-link bg-gray-light">
      <nav>
        <Link to="/">
          Tutorials
        </Link>
        <Link className="ml-1" to="/create">
          Add a Tutorial
        </Link>
      </nav>
    </div>
  )
}
