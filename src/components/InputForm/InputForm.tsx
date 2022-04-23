import Form from 'components/Form/Form'
import { ChangeEvent } from 'react'

interface InputFormProps {
  setOutput: (s: string) => void
}

function InputForm({ setOutput }: InputFormProps) {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setOutput(e.target.value)
  }

  return (
    <Form
      id="input"
      title="Input"
      subtitle="Array"
      onChangeHandler={onChangeHandler}
    />
  )
}

export default InputForm
