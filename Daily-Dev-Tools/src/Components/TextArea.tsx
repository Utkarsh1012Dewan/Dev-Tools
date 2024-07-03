import { VStack, Button, Grid, GridItem } from '@chakra-ui/react'
import TextAreaAutosize from "react-textarea-autosize"
import { ChangeEvent } from 'react';
import { FaTrashAlt } from "react-icons/fa";

interface Props {
    inputValue: string
    outputValue: string
    onInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ inputValue, outputValue, onInputChange }: Props) => {
    return (
        <VStack width="100%" spacing={4} bgColor={"orange"}>
            <Button
                leftIcon={<FaTrashAlt />}
                colorScheme='teal'
                variant='outline'
                alignSelf="flex-end"
            >
                Delete
            </Button>
            <Grid templateColumns={['1fr', null, 'repeat(2, 1fr)']} gap={4} width="100%">
                <GridItem>
                    <TextAreaAutosize
                        minRows={23}
                        placeholder="Input the json file here"
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: 'black',
                            color: 'white',
                        }}
                        value={inputValue}
                        onChange={onInputChange}
                    />
                </GridItem>
                <GridItem>
                    <TextAreaAutosize
                        minRows={23}
                        placeholder="Output will appear here"
                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: 'black',
                            color: 'white',
                        }}
                        value={inputValue ? outputValue : ""}
                        readOnly
                    />
                </GridItem>
            </Grid>
        </VStack>
    )
}

export default TextArea