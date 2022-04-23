import { ChangeEvent } from 'react'

interface FormProps {
  id: string
  title: string
  subtitle: string
  value?: string
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void
  readOnly?: boolean
}

function Form({
  id,
  title,
  subtitle,
  value,
  onChangeHandler = () => {},
  readOnly = false,
}: FormProps) {
  return (
    <form className="form">
      <h2>{title}</h2>
      <label htmlFor={`${id}-field`}>{subtitle}</label>
      <input
        id={`${id}-field`}
        type="text"
        onChange={onChangeHandler}
        readOnly={readOnly}
        value={value}
      />
    </form>
  )
}

export default Form
