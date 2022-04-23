interface FormProps {
  title: string
  subtitle: string
  readOnly?: boolean
}

function Form({ title, subtitle, readOnly = false }: FormProps) {
  return (
    <form className="form">
      <h2>{title}</h2>
      <label>{subtitle}</label>
      <input
        type="text"
        readOnly={readOnly}
        data-testid="input"
      />
    </form>
  )
}

export default Form
