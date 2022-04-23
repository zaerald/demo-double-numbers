import Form from 'components/Form/Form'

interface OutputFormProps {
  value: string
}

function OutputForm({ value }: OutputFormProps) {
  const formattedValue = value.trim()
    ? value
        .split(',')
        .map((it) => it.trim())
        .map((it) => Number(it))
        // we can filter out NaNs here but it is not defined in the requirements.
        .map((it) => it * 2)
        .join(',')
    : ''

  return (
    <Form
      id="output"
      title="Output"
      subtitle="Double"
      value={formattedValue}
      readOnly
    />
  )
}

export default OutputForm
