import React, { useState, useEffect} from 'react'
import ShowTutorial from '../components/ShowTutorial'

export default function ListTutorials() {
  const [tutorials, setTutorials] = useState([])
  const [tutorial, setTutorial] = useState(null)
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading  ] = useState(false)
  const [, setError] = useState(null)
  const [message, setMessage] = useState('No tutorials have been posted')

  function searchTutorials (event) {
    const apiUrl = process.env.REACT_APP_API_URL
    event.preventDefault();
    setIsLoading(true)
    fetch(`${apiUrl}/api/tutorials?title=${query}`)
      .then(response => response.json())
      .then(response => {
        if(response.statusCode === 200) {
          setTutorials(response.tutorials)
          if (response.tutorials.length === 0) {
            setMessage('No results found')
          }
        }
      })
      .catch(error=> {
        setError(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

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
      <form className="search-form" onSubmit={searchTutorials}>
        <div>
          <input id="title" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tutorial by title" type="text" required maxLength="128" autoComplete="off" />
          <button>Search</button>
        </div>
      </form>
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
              ) : <li className="list-group-item">{message}</li>
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
