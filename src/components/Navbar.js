import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header () {
  return (
    <div className="p-1 nav-link bg-gray-light">
      <nav>
        <NavLink exact to="/">
          Tutorials
        </NavLink>
        <NavLink exact className="ml-1" to="/create">
          Add a Tutorial
        </NavLink>
      </nav>
    </div>
  )
}
