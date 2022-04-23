import { render, screen } from '@testing-library/react'
import App from './App'

test('renders input form', () => {
  render(<App />)
  expect(screen.getByText(/input/i)).toBeInTheDocument()
})

test('renders output form', () => {
  render(<App />)
  expect(screen.getByText(/output/i)).toBeInTheDocument()
})

