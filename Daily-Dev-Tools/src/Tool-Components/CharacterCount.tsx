import { Heading, HStack, Text, Box, VStack, Stack, Button } from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"
import TextAreaAutosize from "react-textarea-autosize"
import textStatCalculator from "../helpers/text-data-calculator"
import { componentNames } from "../data/tools"
import { FaTrashAlt } from "react-icons/fa"

const CharacterCount = () => {

    const [input, setInput] = useState("")
    const [letterCount, setLetterCount] = useState(0)
    const [wordCount, setWordCount] = useState(0)
    const [lineCount, setLineCount] = useState(0)
    const [paraCount, setParaCount] = useState(0)

    const updater = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newVal = e.target.value
        setInput(newVal)
        let data = textStatCalculator(newVal);

        setLetterCount(data.characters)
        setWordCount(data.words)
        setLineCount(data.lines)
        setParaCount(data.paragraphs)
    }

    const deleteInput = () => {
        setInput("")
        setLetterCount(0)
        setWordCount(0)
        setLineCount(0)
        setParaCount(0)
    }

    return (
        <>
            <Heading fontFamily={"ubuntu"} size="3xl" className="mb-5">{componentNames.characterCount}</Heading>
            <Button
                leftIcon={<FaTrashAlt />}
                colorScheme='teal'
                variant='outline'
                alignSelf="flex-end"
                onClick={deleteInput}
                className="mb-5"
            >
                Delete
            </Button>
            <Stack direction={['column', 'row']}>
                <VStack spacing={3} className="mr-2" justifyContent={"space-between"}>
                    <VStack alignContent="flex-end" className='border-2 border-white p-5 min-w-full'>
                        <Heading size="lg" className="mb-5">Statistics</Heading>
                        <HStack spacing={12}>
                            <VStack align="self-start" spacing={5}>
                                <Text>Characters: </Text>
                                <Text>Words :</Text>
                                <Text>Lines :</Text>
                                <Text>Paragraphs: </Text>
                            </VStack>
                            <VStack spacing={5}>
                                <Text>{letterCount}</Text>
                                <Text>{wordCount}</Text>
                                <Text>{lineCount}</Text>
                                <Text>{paraCount}</Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </VStack>
                <TextAreaAutosize
                    minRows={20}
                    className="w-full p-2.5 bg-black text-white rounded-md 
                              border border-[#fafafa]"
                    placeholder="Paste your text here."
                    value={input}
                    onChange={updater}
                />
            </Stack >
        </>
    )
}

export default CharacterCount