import { HStack, VStack, Text, Heading, SimpleGrid } from '@chakra-ui/react';
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
      <Heading fontFamily={"ubuntu"} size="3xl" className="mb-4">
        {componentNames.loremIpsumGenerator}
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={4}
        className="mb-[10px] border border-white rounded-md"
        p={2}
      >
        <VStack align="stretch">
          <Text className="font-bold">Words</Text>
          <InputSlider
            placeholder="Words"
            minVal={1}
            maxVal={50}
            step={1}
            value={words <= 50 ? words : 50}
            onChange={(value) => setWords(value)}
          />
          <Text className="font-bold">Sentences</Text>
          <InputSlider
            placeholder="Sentences"
            minVal={1}
            maxVal={20}
            step={1}
            value={sentences <= 20 ? sentences : 20}
            onChange={(value) => setSentences(value)}
          />
        </VStack>
        <VStack align="stretch">
          <Text className="font-bold">Paragraphs</Text>
          <InputSlider
            placeholder="Paragraphs"
            minVal={1}
            maxVal={20}
            step={1}
            value={paragraphs <= 10 ? paragraphs : 10}
            onChange={(value) => setParagraph(value)}
          />
          <HStack>
            <Text className="font-bold">Random Sentences?</Text>
            <Switch
              isChecked={random}
              id='email-alerts'
              size="sm"
              value={String(random)}
              onChange={(e) => setRandom(Boolean(e.target.checked))}
            />
          </HStack>
        </VStack>
      </SimpleGrid>

      <TextAreaAutosize
        minRows={16}
        className="w-full p-2.5 bg-black text-white rounded-md 
          border border-[#fafafa]"
        placeholder="Generated text occurs here"
        value={input}
        onChange={updater}
        readOnly={true}
      />
    </>)
}

export default RandomTextGenerator