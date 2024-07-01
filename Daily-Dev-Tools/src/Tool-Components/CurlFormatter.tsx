import { HStack, Box } from "@chakra-ui/react"
import TextAreaAutosize from "react-textarea-autosize"
import { ChangeEvent, useEffect, useState } from "react"
import curlFormatter from "../helper-Methods/curl-formatter"

const CurlFormatter = () => {

    const [value, setValue] = useState<string>("")
    const [formattedCurl, setFormattedCurl] = useState<string>("")
    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value
        setValue(newValue)
    }

    useEffect(() => {
        try {
            const val = curlFormatter(value)
            setFormattedCurl(val)
        }
        catch (error) {
            if (error instanceof Error) {
                setFormattedCurl(error.message)
            }
            else {
                setValue("Unexpected Error")
            }
        }

    }, [value])


    return (
        <HStack>
            <Box className="h-auto ">
                <HStack>
                    <TextAreaAutosize
                        minRows={25}
                        maxRows={25}
                        placeholder="Input the curl here"
                        style={{ width: 500, height: 500 }}
                        value={value}
                        onChange={changeHandler}
                    />
                </HStack>
            </Box>
            <Box className="h-auto ">
                <TextAreaAutosize
                    minRows={25}
                    maxRows={25}
                    placeholder="See the output here"
                    style={{ width: 500, height: 500 }}
                    value={formattedCurl}
                />
            </Box>
        </HStack>
    )
}

export default CurlFormatter