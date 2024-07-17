import { VStack, Button, Grid, GridItem, Heading } from '@chakra-ui/react'
import TextAreaAutosize from "react-textarea-autosize"
import { ChangeEvent, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { componentNames } from '../data/tools';

interface Props {
  inputValue1: string
  inputValue2: string
  outputValue1: string
  outputValue2: string
  onInputChange1: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onInputChange2: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const CompareText = ({ inputValue1, inputValue2, outputValue1, outputValue2, onInputChange1, onInputChange2 }: Props) => {

  const [inputValueState1, setInputValueState1] = useState(inputValue1);
  const [inputValueState2, setInputValueState2] = useState(inputValue2);

  const deleteInput1 = () => {
    setInputValueState1("");
  }
  return (
    <>
      <Heading fontFamily={"ubuntu"} size="3xl">{componentNames.testComponent}</Heading>
      <VStack width="100%" spacing={4}  >
        <Button
          leftIcon={<FaTrashAlt />}
          colorScheme='teal'
          variant='outline'
          alignSelf="flex-end"
          onClick={deleteInput1}
        >
          Delete
        </Button>
        <Grid templateColumns={['1fr', null, 'repeat(2, 1fr)']} gap={4} width="100%">
          <GridItem>
            <TextAreaAutosize
              minRows={15}
              placeholder="Input the json file here"
              className="w-full p-2.5 bg-black text-white rounded-md 
                        border border-[#fafafa]"
              value={inputValueState1}
              onChange={(e) => {
                setInputValueState1(e.target.value);
                onInputChange1(e);
              }}
            />
          </GridItem>
          <GridItem>
            <TextAreaAutosize
              minRows={15}
              placeholder="Input the json file here"
              className="w-full p-2.5 bg-black text-white rounded-md 
                        border border-[#fafafa]"
              value={inputValueState2}
              onChange={(e) => {
                setInputValueState2(e.target.value);
                onInputChange2(e);
              }}
            />
          </GridItem>
        </Grid>
      </VStack >
      <Heading className="mb-10 mt-4">Difference</Heading>
      <VStack width="100%" spacing={4}>
        <Grid templateColumns={['1fr', null, 'repeat(2, 1fr)']} gap={4} width="100%">

          <GridItem>
            <TextAreaAutosize
              minRows={2}
              placeholder="Output will appear here"
              className="w-full p-2.5 bg-black text-white rounded-md 
                        border border-[#fafafa]"
              value={inputValueState1 ? outputValue1 : ""}
            />
          </GridItem>
          <GridItem>
            <TextAreaAutosize
              minRows={2}
              placeholder="Output will appear here"
              className="w-full p-2.5 bg-black text-white rounded-md 
                        border border-[#fafafa]"
              value={inputValueState2 ? outputValue2 : ""}
            />
          </GridItem>
        </Grid>
      </VStack>
    </>
  )
}

export default CompareText