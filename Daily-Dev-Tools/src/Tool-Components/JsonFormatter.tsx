import { Box, HStack } from "@chakra-ui/react"
import TextAreaAutosize from "react-textarea-autosize"
import { ChangeEvent, useState } from "react"

const JsonFormatter = () => {
  const [inputValue, setInputValue] = useState<string>("")
  const [outputValue, setOutputValue] = useState<string>("")

  const beautify = (value: string) => {
    const newValue = JSON.stringify(JSON.parse(value), null, 5)
    setOutputValue(newValue)
  }

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue)
    beautify(newValue)
  }
  return (
    <HStack>
      <Box className="h-auto ">
        <TextAreaAutosize
          minRows={25}
          maxRows={25}
          placeholder="Input the json file here"
          style={{ width: 500, height: 500 }}
          value={inputValue}
          onChange={handleInputChange}
        />
      </Box>
      <Box className="h-auto ">
        <TextAreaAutosize
          minRows={25}
          maxRows={25}
          placeholder="Input the json file here"
          style={{ width: 500, height: 500 }}
          value={outputValue}
        />
      </Box>
    </HStack>
  )
}

export default JsonFormatter

