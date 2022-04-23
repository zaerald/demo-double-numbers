import { fireEvent, render, screen } from '@testing-library/react'
import InputForm from '../InputForm'

test('input can be updated', () => {
  render(<InputForm setOutput={() => {}} />)

  const inputEl = screen.getByLabelText<HTMLInputElement>(/Array/)

  fireEvent.change(inputEl, {
    target: {
      value: 'updated',
    },
  })

  expect(inputEl.value).toBe('updated')
})
