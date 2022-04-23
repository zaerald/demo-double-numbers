import { render, screen } from '@testing-library/react'
import OutputForm from '../OutputForm'

test('output form field should not be editable', () => {
  render(<OutputForm value="" />)

  const outputField = screen.getByLabelText<HTMLInputElement>(/double/i)

  expect(outputField).toHaveAttribute('readOnly')
})

test('output value should properly double the input', () => {
  render(<OutputForm value="1,2,3" />)

  const outputField = screen.getByLabelText<HTMLInputElement>(/double/i)

  expect(outputField.value).toBe('2,4,6')
})

test('handle invalid number input and display NaN', () => {
  render(<OutputForm value="NOT A NUMBER,2,ME TOO" />)

  const outputField = screen.getByLabelText<HTMLInputElement>(/double/i)

  expect(outputField.value).toBe('NaN,4,NaN')
})

test('handle empty input and display zero', () => {
  render(<OutputForm value="1,,3,,3,7," />)

  const outputField = screen.getByLabelText<HTMLInputElement>(/double/i)

  expect(outputField.value).toBe('2,0,6,0,6,14,0')
})

test('handle input numbers with space around and display zero', () => {
  render(<OutputForm value="     1,    3   ,    3   ,7      " />)

  const outputField = screen.getByLabelText<HTMLInputElement>(/double/i)

  expect(outputField.value).toBe('2,6,6,14')
})
