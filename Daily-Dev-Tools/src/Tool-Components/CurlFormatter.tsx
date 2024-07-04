import { ChangeEvent, useState } from "react"
import curlFormatter from "../helper-Methods/curl-formatter"
import TextArea from "../Components/TextArea"

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
        <TextArea
            inputValue={value}
            outputValue={formattedCurl}
            onInputChange={changeHandler} />
    )
}

export default CurlFormatter