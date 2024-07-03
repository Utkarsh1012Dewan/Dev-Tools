import { ChangeEvent, useState } from 'react'
import TextArea from '../Components/TextArea'


const TestComponent = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [outputValue, setOutputValue] = useState<string>("")

  const beautify = (value: string) => {
    try {
      const newValue = JSON.stringify(JSON.parse(value), null, 5)
      setOutputValue(newValue)
    }
    catch (error) {
      if (error instanceof Error) {
        setOutputValue(error.message)
      }
      else {
        setOutputValue("Something bad happened. LMAO")
      }
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue)
    beautify(newValue)
  }
  return (
    <TextArea inputValue={inputValue} outputValue={outputValue} onInputChange={handleInputChange} />
  )
}

export default TestComponent