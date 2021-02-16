import React, { useState, useEffect} from 'react'
import ShowTutorial from '../components/ShowTutorial'

export default function ListTutorials() {
  const [tutorials, setTutorials] = useState([])
  const [tutorial, setTutorial] = useState(null)
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading  ] = useState(false)
  const [, setError] = useState(null)
  const [message, setMessage] = useState('No tutorials have been posted')
  const [showClearButton, setShowClearButton] = useState(false)

  function fetchTutorials () {
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
  }

  function searchTutorials (event) {
    const apiUrl = process.env.REACT_APP_API_URL
    event.preventDefault();
    setIsLoading(true)
    setTutorial(null)
    fetch(`${apiUrl}/api/tutorials?title=${query}`)
      .then(response => response.json())
      .then(response => {
        if(response.statusCode === 200) {
          setTutorials(response.tutorials)
          if (response.tutorials.length === 0) {
            setShowClearButton(false)
            setMessage('No results found')
          } else {
            setShowClearButton(true)
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

  function clearSearchResults () {
    setShowClearButton(false)
    setQuery('')
    fetchTutorials()
  }

  useEffect(() => {
    fetchTutorials()
  }, [])
  if (isLoading) {
    return (
      <div className="center">loading...</div>
    )
  }
  return (
    <div className="container fade">
      <form className="search-form" onSubmit={searchTutorials}>
        <div>
          <input id="title" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search tutorial by title" type="text" required maxLength="128" autoComplete="off" />
          <button>Search</button>
        </div>
      </form>
      <div className="card ph-1 mt-1 mb-1">
        <div>
          <div className="float-child">
            <h2 className="title-text">Tutorials List</h2>
            <ul className="list-group">
              {
                tutorials.length > 0 ? (
                  tutorials.map(tutorial => <li key={tutorial.id} className="list-group-item" onClick={(e) => {
                    setTutorial(tutorial)
                    document.querySelectorAll('.list-active').forEach(element => element.classList.remove('list-active'))
                    e.target.classList.add('list-active')
                  }}>{tutorial.title}</li>)
                ) : <li className="list-group-item">{message}</li>
              }
            </ul>
            {showClearButton && <button className="bg-danger button" onClick={clearSearchResults}>Remove All</button>}
          </div>
          <div className="float-child">
            <ShowTutorial tutorial={tutorial}/>
          </div>
        </div>
        <div className="clearfix mb-1"></div>
      </div>
    </div>
  )
}
