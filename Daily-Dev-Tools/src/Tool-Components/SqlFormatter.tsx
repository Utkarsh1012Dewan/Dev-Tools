import { HStack, Box } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useState } from 'react'
import TextAreaAutosize from "react-textarea-autosize"
import { format } from 'sql-formatter';
import Dropdown from '../helper-Tool-components/Dropdown';

const SqlFormatter = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const [outputValue, setOutputValue] = useState<string>("")
    //dialect -> language syntax we are choosing to format
    const [dialect, setDialect] = useState<string>("sql")

    const beautify = (value: string) => {
        try {
            const newValue = format(value, { language: dialect as any, tabWidth: 5 })
            setOutputValue(newValue)
        } catch (error) {
            if (error instanceof Error) {
                setOutputValue(error.message)
            } else {
                setOutputValue("Unexpected Error")
            }
        }
    }

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue)
    }

    useEffect(() => {
        beautify(inputValue)
    }, [inputValue])

    return (
        <HStack>
            <Box className="h-auto ">
                <HStack>
                    <Dropdown dialect={dialect} onChange={setDialect} />
                    <TextAreaAutosize
                        minRows={25}
                        maxRows={25}
                        placeholder="Input the json file here"
                        style={{ width: 500, height: 500 }}
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </HStack>
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

export default SqlFormatter