import { fireEvent, render, screen } from '@testing-library/react'
import Form from '../Form'

test('render title and subtitle', () => {
  render(<Form id="test" title="My Title" subtitle="My Subtitle" />)
  const titleEl = screen.getByText(/My Title/)
  const subtitleEl = screen.getByText(/My Subtitle/)

  expect(titleEl.textContent).toBe('My Title')
  expect(subtitleEl.textContent).toBe('My Subtitle')
})

test('input should be editable', () => {
  render(<Form id="test" title="My Title" subtitle="My Subtitle" />)

  const inputEl = screen.getByLabelText<HTMLInputElement>(/subtitle/i)

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  })

  expect(inputEl.value).toBe('5')
})

test('disabled input should not be editable', () => {
  render(<Form id="test" title="My Title" subtitle="My Subtitle" readOnly />)

  const inputEl = screen.getByLabelText<HTMLInputElement>(/subtitle/i)

  expect(inputEl).toHaveAttribute('readOnly')
})


test('value should be assigned to the input field', () => {
  render(<Form id="test"  title="My Title" subtitle="My Subtitle" value="test" />)

  const inputEl = screen.getByLabelText<HTMLInputElement>(/subtitle/i)

  expect(inputEl.value).toBe('test')
})

