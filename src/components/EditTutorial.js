import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from "react-router-dom";
import '../assets/css/style.css'

export default function EditTutorial() {
  const [title, setTitle] = useState('');
  const [tutorial, setTutorial] = useState(null);
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading  ] = useState(false);
  const [, setError] = useState(null)
  const { id } = useParams();
  const history = useHistory();
  const apiUrl = process.env.REACT_APP_API_URL;

  function deleteTutorial (e) {
    setMessage('')
    e.preventDefault();
    const reply = window.confirm(`Are you sure you want to delete ${tutorial.title}?`);
    if (reply === true) {
    const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
    }
    fetch(`${apiUrl}/api/tutorials/${id}`, options)
      .then(response => {
        if(response.status === 204) {
          history.replace('/');
        }
      })
      .catch(error => {
        setError(error.message)
      })
    }
  }

  function togglePublish (e) {
    setMessage('')
    e.preventDefault();
    const published = tutorial.published ? false : true
    const tutorialObject = {
      title: title,
      description: description,
      published
  };
  
  const options = {
      method: 'PUT',
      body: JSON.stringify(tutorialObject),
      headers: {
        'Content-Type': 'application/json'
      }
  }
  fetch(`${apiUrl}/api/tutorials/${id}`, options)
    .then(response => response.json())
    .then(response => {
      if(response.statusCode === 200) {
        setTutorial({...tutorial, published})
        setMessage('The tutorial was updated successfully!')
      }
    })
    .catch(error => {
      setError(error.message)
    })
  }

  function updateTutorial (e) {
    setMessage('')
    e.preventDefault();
    const tutorialObject = {
      title: title,
      description: description,
      published: tutorial.published
  };
  
  const options = {
      method: 'PUT',
      body: JSON.stringify(tutorialObject),
      headers: {
        'Content-Type': 'application/json'
      }
  }
  fetch(`${apiUrl}/api/tutorials/${id}`, options)
    .then(response => response.json())
    .then(response => {
      if(response.statusCode === 200) {
        setMessage('The tutorial was updated successfully!')
      }
    })
    .catch(error => {
      setError(error.message)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    fetch(`${apiUrl}/api/tutorials/${id}`)
      .then(response => response.json())
      .then(response => {
        if(response.statusCode === 200) {
          setTutorial(response.tutorial)
          setDescription(response.tutorial.description)
          setTitle(response.tutorial.title)
        }
      })
      .catch(error=> {
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [id, apiUrl])

  if (isLoading) {
    return (
      <div className="center">loading...</div>
    )
  }
  return (
    <div className="container fade">
      <div className="card p-1 mt-1">
        <h2 className="title-text">Edit a Tutorial</h2>
        <form>
          <div className="mb-1">
            <label htmlFor="title">Title</label>
            <input id="title" value={title} onChange={e => setTitle(e.target.value)} type="text" required maxLength="128" autoComplete="off" />
          </div>
          <div className="mb-1">
            <label htmlFor="description">Description</label>
            <input id="description" value={description} onChange={e => setDescription(e.target.value)} type="text" required maxLength="256" autoComplete="off"/>
          </div>
          <div className="mb-1">
            <p><span className="text-bold">Status:</span> {tutorial && tutorial.published ? 'Published' : 'Pending'}</p>
          </div>
          <div>
            <button className="button bg-success mr-1 text-bold" onClick={(e) => togglePublish(e)}>{tutorial && tutorial.published ? 'Unpublish' : 'Publish'}</button>
            <button className="button bg-danger mr-1 text-bold" onClick={(e) => deleteTutorial(e)}>Delete</button>
            <button className="button bg-primary text-bold" onClick={(e) => updateTutorial(e)}>Update</button>
          </div>
        </form>
        <div>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}
