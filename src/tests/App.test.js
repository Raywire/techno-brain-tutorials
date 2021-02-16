import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders Tutorials link', () => {
  render(<App />)
  const linkElement = screen.getByText('Tutorials')
  expect(linkElement).toBeInTheDocument()
})

test('renders Create link', () => {
  render(<App />)
  const linkElement = screen.getByText('Add a Tutorial')
  expect(linkElement).toBeInTheDocument()
})

test('renders loading...', () => {
  render(<App />)
  const linkElement = screen.getByText('loading...')
  expect(linkElement).toBeInTheDocument()
})

test('renders footer text', () => {
  render(<App />)
  const linkElement = screen.getByText(`Copyright © ${new Date().getFullYear()} Tutorials`)
  expect(linkElement).toBeInTheDocument()
})
