import { fireEvent, render, screen } from '@testing-library/react'
import Form from '../Form'

test('render title and subtitle', () => {
  render(<Form title="My Title" subtitle="My Subtitle" />)
  const titleEl = screen.getByText(/My Title/)
  const subtitleEl = screen.getByText(/My Subtitle/)

  expect(titleEl.textContent).toBe('My Title')
  expect(subtitleEl.textContent).toBe('My Subtitle')
})

test('input should be editable', () => {
  render(<Form title="My Title" subtitle="My Subtitle" />)

  const inputEl = screen.getByTestId<HTMLInputElement>('input')

  fireEvent.change(inputEl, {
    target: {
      value: '5',
    },
  })

  expect(inputEl.value).toBe('5')
})

test('disabled input should not be editable', () => {
  render(<Form title="My Title" subtitle="My Subtitle" readOnly />)

  const inputEl = screen.getByTestId<HTMLInputElement>('input')

  expect(inputEl).toHaveAttribute('readOnly')
})

