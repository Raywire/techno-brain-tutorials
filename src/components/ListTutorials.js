import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import ShowTutorial from '../components/ShowTutorial'

export default function ListTutorials() {
  const [tutorials, setTutorials] = useState([])
  const [tutorial, setTutorial] = useState(null)
  const [isLoading, setIsLoading  ] = useState(false)
  const [, setError] = useState(null)

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL
    setIsLoading(true)
    fetch(`${apiUrl}/api/tutorials`)
      .then(response => response.json())
      .then(response => {
        if(response.statusCode === 200) {
          setTutorials(response.tutorials)
        }
      })
      .catch(error=> {
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])
  if (isLoading) {
    return (
      <div className="center">loading...</div>
    )
  }
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
            {
              tutorials.length > 0 ? (
                tutorials.map(tutorial => <li key={tutorial.id} className="list-group-item" onClick={(e) => {
                  setTutorial(tutorial)
                  document.querySelectorAll('.active').forEach(element => element.classList.remove('active'))
                  e.target.classList.add('active')
                }}>{tutorial.title}</li>)
              ) : <li className="list-group-item">No tutorials have been posted</li>
            }
          </ul>
          <button className="bg-danger button">Remove All</button>
        </div>
        <div className="float-child">
          <ShowTutorial tutorial={tutorial}/>
        </div>
      </div>
    </div>
  )
}
