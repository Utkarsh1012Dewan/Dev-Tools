import { Box, HStack, VStack, Text } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import TextAreaAutosize from "react-textarea-autosize"
import textGen from '../helper-Methods/text-generator';
import InputSlider from '../helper-Tool-components/input-slider';
import { Switch } from '@chakra-ui/react'

const RandomTextGenerator = () => {

  const [input, setInput] = useState<string>("")
  const [paragraphs, setParagraph] = useState<number>(0)
  const [words, setWords] = useState<number>(0)
  const [sentences, setSentences] = useState<number>(0)
  const [random, setRandom] = useState<boolean>(true)

  const updater = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    const val = textGen({ paragraphs, words, sentences, random })
    setInput(val)
  }, [words, sentences, paragraphs, random])


  return (<Box className="h-auto p-5">
    <HStack justifyContent={'space-between'}
      className="w-[700px] mb-[20px]">
      <VStack>
        <InputSlider placeholder="Words" minVal={1} maxVal={20} step={1} />
        <InputSlider placeholder="Sentences" minVal={1} maxVal={20} step={1} />
      </VStack>
      <VStack>
        <InputSlider placeholder="Paragraphs" minVal={1} maxVal={20} step={1} />
        <HStack>
          <Text>Random Sentences?</Text>
          <Switch id='email-alerts' size="sm" />
        </HStack>
      </VStack>
    </HStack>

    <TextAreaAutosize
      minRows={25}
      maxRows={25}
      placeholder="Generated text occurs here"
      style={{ width: 700, height: 450 }}
      value={input}
      onChange={updater}
    />
  </Box>)
}

export default RandomTextGenerator