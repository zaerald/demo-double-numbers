import { useState } from 'react'
import InputForm from 'components/InputForm/InputForm'
import OutputForm from 'components/OutputForm/OutputForm'

import './App.css'

function App() {
  const [output, setOutput] = useState<string>('')

  return (
    <div className="App">
      <InputForm setOutput={setOutput} />
      <OutputForm value={output} />
    </div>
  )
}

export default App
