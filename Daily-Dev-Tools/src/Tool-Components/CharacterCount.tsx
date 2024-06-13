import { Heading, HStack, Text, Box, VStack } from "@chakra-ui/react"
import { ChangeEvent, useState } from "react"
import TextAreaAutosize from "react-textarea-autosize"
import textStatCalculator from "../helper-Methods/text-data-calculator"

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

    return (
        <HStack>
            <VStack spacing={5}>
                <Heading size="lg">Statistics</Heading>
                <HStack spacing={10}>
                    <VStack align="self-start">
                        <Text>Characters : </Text>
                        <Text>Words :</Text>
                        <Text>Lines :</Text>
                        <Text>Paragraphs: </Text>
                    </VStack>
                    <VStack>
                        <Text>{letterCount}</Text>
                        <Text>{wordCount}</Text>
                        <Text>{lineCount}</Text>
                        <Text>{paraCount}</Text>
                    </VStack>
                </HStack>
            </VStack>
            <HStack>
                <Box className="h-auto ">
                    <TextAreaAutosize
                        minRows={25}
                        maxRows={25}
                        placeholder="Paste your text here."
                        style={{ width: 500, height: 500 }}
                        value={input}
                        onChange={updater}
                    />
                </Box>
            </HStack>
        </HStack>
    )
}

export default CharacterCount