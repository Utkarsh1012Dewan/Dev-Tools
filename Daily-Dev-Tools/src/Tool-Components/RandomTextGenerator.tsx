import { Box, HStack, VStack, Text, Heading } from '@chakra-ui/react';
import { ChangeEvent, useEffect, useState } from 'react';
import TextAreaAutosize from "react-textarea-autosize"
import textGen from '../helpers/text-generator';
import InputSlider from '../helper-Tool-components/input-slider';
import { Switch } from '@chakra-ui/react'
import { componentNames } from '../data/tools';


const RandomTextGenerator = () => {

  const [input, setInput] = useState<string>("")
  const [paragraphs, setParagraph] = useState<number>(1)
  const [words, setWords] = useState<number>(1)
  const [sentences, setSentences] = useState<number>(1)
  const [random, setRandom] = useState<boolean>(true)

  const updater = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    const val = textGen({ words, paragraphs, sentences, random })
    setInput(val)
  }, [words, paragraphs, sentences, random])


  return (
    <>
      <Heading fontFamily={"ubuntu"} size="3xl" className="mb-5">
        {componentNames.loremIpsumGenerator}
      </Heading>
      <Box className="h-auto p-5">
        <HStack justifyContent={'space-between'}
          className="w-[700px] mb-[20px]">
          <VStack>
            <InputSlider placeholder="Words"
              minVal={1} maxVal={50} step={1}
              value={words <= 50 ? words : 50}
              onChange={(value) => setWords(value)}
            />

            <InputSlider placeholder="Sentences"
              minVal={1} maxVal={20} step={1}
              value={sentences <= 20 ? sentences : 20}
              onChange={(value) => setSentences(value)}
            />
          </VStack>
          <VStack>
            <InputSlider placeholder="Paragraphs"
              minVal={1} maxVal={20} step={1}
              value={paragraphs <= 10 ? paragraphs : 10}
              onChange={(value) => setParagraph(value)}
            />

            <HStack>
              <Text>Random Sentences?</Text>
              <Switch isChecked={random} id='email-alerts' size="sm"
                value={String(random)}
                onChange={(e) => setRandom(Boolean(e.target.checked))} />
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
          readOnly={true}
        />
      </Box>
    </>)
}

export default RandomTextGenerator