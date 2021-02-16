import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react';
import CreateTutorial from '../components/CreateTutorial';
import { createMemoryHistory } from 'history'

const renderWithRouter = (component) => {
  const history = createMemoryHistory()
  return { 
  ...render (
  <Router history={history}>
    {component}
  </Router>
  )
}
}

test('renders Add a Tutorial', () => {
  renderWithRouter(<CreateTutorial />)
  const linkElement = screen.getByText('Add a Tutorial');
  expect(linkElement).toBeInTheDocument();
});

test('renders Title', () => {
  renderWithRouter(<CreateTutorial />)
  const linkElement = screen.getByText('Title');
  expect(linkElement).toBeInTheDocument();
});

test('renders Description', () => {
  renderWithRouter(<CreateTutorial />)
  const linkElement = screen.getByText('Description');
  expect(linkElement).toBeInTheDocument();
});
