import { HStack, Box } from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import TextAreaAutosize from "react-textarea-autosize"
import { format, formatDialect, sql } from 'sql-formatter';
import Dropdown from '../helper-Tool-components/Dropdown';

const SqlFormatter = () => {
    const [inputValue, setInputValue] = useState<string>("")
    const [outputValue, setOutputValue] = useState<string>("")
    const [dialect, setDialect] = useState<string>("mysql")

    const beautify = (value: string) => {
        const newValue = formatDialect(inputValue, { dialect: sql })
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
                <HStack>
                    <Dropdown />
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