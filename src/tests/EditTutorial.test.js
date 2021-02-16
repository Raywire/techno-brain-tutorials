import React from 'react'
import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import EditTutorial from '../components/EditTutorial'
import { createMemoryHistory } from 'history'

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return {
    ...render(
  <Router history={history}>
    {component}
  </Router>
    )
  }
}

test('renders loading...', () => {
  renderWithRouter(<EditTutorial />)
  const linkElement = screen.getByText('loading...')
  expect(linkElement).toBeInTheDocument()
})
