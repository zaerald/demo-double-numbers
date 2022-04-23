import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

test('renders input form', () => {
  render(<App />)
  expect(screen.getByText(/input/i)).toBeInTheDocument()
})

test('renders output form', () => {
  render(<App />)
  expect(screen.getByText(/output/i)).toBeInTheDocument()
})

test('input field should double the output value', () => {
  render(<App />)

  const inputField = screen.getByLabelText<HTMLInputElement>(/array/i)
  const outputField = screen.getByLabelText<HTMLInputElement>(/double/i)

  fireEvent.change(inputField, {
    target: {
      value: '5',
    },
  })

  expect(outputField.value).toBe('10')
})

test('input field with multiple numbers should double the output value', () => {
  render(<App />)

  const inputField = screen.getByLabelText<HTMLInputElement>(/array/i)
  const outputField = screen.getByLabelText<HTMLInputElement>(/double/i)

  fireEvent.change(inputField, {
    target: {
      value: '1,2,3',
    },
  })

  expect(outputField.value).toBe('2,4,6')
})

