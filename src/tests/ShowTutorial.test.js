import React from 'react'
import { render, screen } from '@testing-library/react'
import ShowTutorial from '../components/ShowTutorial'

test('renders Select a tutorial from the list', () => {
  render(<ShowTutorial />)
  const linkElement = screen.getByText('Select a tutorial from the list')
  expect(linkElement).toBeInTheDocument()
})

test('renders Tutorial', () => {
  render(<ShowTutorial />)
  const linkElement = screen.getByText('Tutorial')
  expect(linkElement).toBeInTheDocument()
})
