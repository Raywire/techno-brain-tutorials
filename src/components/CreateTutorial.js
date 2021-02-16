import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../assets/css/style.css'

export default function CreateTodo () {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [, setError] = useState(null)
  const history = useHistory()

  function handleSubmit (event) {
    event.preventDefault()
    const apiUrl = process.env.REACT_APP_API_URL
    const tutorial = {
      title: title,
      description: description
    }

    const options = {
      method: 'POST',
      body: JSON.stringify(tutorial),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`${apiUrl}/api/tutorials`, options)
      .then(response => response.json())
      .then(response => {
        if (response.statusCode === 201) {
          history.push('/')
        }
      })
      .catch(error => {
        setError(error.message)
      })
  }

  return (
    <div className="container fade">
      <div className="card p-1 mt-1">
        <h2 className="title-text">Add a Tutorial</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-1">
            <label htmlFor="title">Title</label>
            <input id="title" value={title} onChange={e => setTitle(e.target.value)} type="text" required maxLength="128" autoComplete="off" />
          </div>
          <div className="mb-1">
            <label htmlFor="description">Description</label>
            <input id="description" value={description} onChange={e => setDescription(e.target.value)} type="text" required maxLength="256" autoComplete="off"/>
          </div>
          <div>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    </div>
  )
}
