
// import { useState } from 'react'
import { Heading } from '@chakra-ui/react';
import { componentNames } from '../data/tools';


const JsonComparer = () => {
  // const [inputValue1, setInputValue1] = useState<string>("")
  // const [outputValue, setOutputValue] = useState<string>("")

  return (
    <Heading fontFamily={"ubuntu"} size="3xl">{componentNames.jsonComparer}</Heading>
  )
}

export default JsonComparer