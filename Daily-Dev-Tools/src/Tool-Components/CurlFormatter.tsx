import { ChangeEvent, useState } from "react"
import curlFormatter from "../helpers/curl-formatter"
import TextArea from "../Components/TextArea"
import { componentNames } from "../data/tools"
import { Heading } from "@chakra-ui/react"

const CurlFormatter = () => {

    const [value, setValue] = useState<string>("")
    const [formattedCurl, setFormattedCurl] = useState<string>("")
    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value
        setValue(newValue ? newValue : "")
        beautify(newValue)
    }

    function beautify(value: string) {
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
    }

    return (
        <>
            <Heading fontFamily={"ubuntu"} size="3xl">{componentNames.curlFormatter}</Heading>
            <TextArea
                inputValue={value}
                outputValue={formattedCurl}
                onInputChange={changeHandler} />
        </>
    )
}

export default CurlFormatter