import { ChangeEvent, useState } from "react"
import TextArea from "../Components/TextArea"
import { Heading } from "@chakra-ui/react"
import { componentNames } from "../data/tools"

const JsonFormatter = () => {
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
        setOutputValue("Something bad Happened")
      }
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue ? newValue : "")
    beautify(newValue)
  }
  return (
    <>
      <Heading fontFamily={"ubuntu"} size="3xl">{componentNames.jsonFormatter}</Heading>
      <TextArea
        inputValue={inputValue}
        outputValue={outputValue}
        onInputChange={handleInputChange} />
    </>
  )
}

export default JsonFormatter

