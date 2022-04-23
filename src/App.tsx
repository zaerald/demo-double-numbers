import Form from 'components/Form/Form'
import { useState } from 'react'

function App() {
  const [output, setOutput] = useState<string>('')

  const transformedOutput = output.trim()
    ? output
        .split(',')
        .map((it) => it.trim())
        .map((it) => Number(it))
        // we can filter out NaNs here but it is not defined in the requirements.
        .map((it) => it * 2)
        .join(',')
    : ''

  return (
    <div className="App">
      <Form
        id="input"
        title="Input"
        subtitle="Array"
        onChangeHandler={(e) => setOutput(e.target.value)}
      />
      <Form
        id="output"
        title="Output"
        subtitle="Double"
        value={transformedOutput}
        readOnly
      />
    </div>
  )
}

export default App
