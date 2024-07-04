import { ChangeEvent, useState } from 'react'
import { format } from 'sql-formatter';
import TextArea from '../Components/TextArea';

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
        beautify(newValue)
    }
    return (
        <TextArea inputValue={inputValue} outputValue={outputValue} onInputChange={handleInputChange} />
    )
}

export default SqlFormatter