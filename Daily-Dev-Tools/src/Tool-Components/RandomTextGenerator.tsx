import { Box, Button, HStack, VStack } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import TextAreaAutosize from "react-textarea-autosize"
import { loremIpsum, name, surname, fullname, username } from 'react-lorem-ipsum';
import { LoremIpsum } from 'react-lorem-ipsum';
import textGen from '../helper-Methods/text-generator';

const RandomTextGenerator = () => {

  const [input, setInput] = useState<String>("")
  const [paragraphs, setParagraph] = useState<number>(0)
  const [words, setWords] = useState<number>(0)
  const [sentences, setSentences] = useState<number>(0)
  const [random, setRandom] = useState<boolean>(true)

  const updater = () => {
    const val = textGen(paragraphs, words, sentences, random)
    setInput(val)
  }

  return (<Box className="h-auto ">
    <HStack>
      <VStack>
        <Button>Words</Button>
        <Button>Paragraphs</Button>
      </VStack>
      <VStack>
        <Button>Sentences</Button>
        <Button></Button>
      </VStack>
    </HStack>
    <TextAreaAutosize
      minRows={25}
      maxRows={25}
      placeholder="Input the json file here"
      style={{ width: 700, height: 500 }}
      value={input[0]}
      onChange={updater}
    />
  </Box>)
}

export default RandomTextGenerator