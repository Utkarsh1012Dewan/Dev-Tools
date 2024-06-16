import { HStack, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack, VStack } from "@chakra-ui/react"

interface Props {
    placeholder: string,
    minVal: number,
    maxVal: number,
    step: number
}

const InputSlider = ({ placeholder, minVal, maxVal, step }: Props) => {
    return (
        <HStack spacing={5}>
            <Input placeholder={placeholder} size="xs" />
            <Slider defaultValue={1} min={minVal} max={maxVal} step={step}>
                <SliderTrack bg='red.100'>
                    <SliderFilledTrack bg='tomato' />
                </SliderTrack>
                <SliderThumb boxSize={5} />
            </Slider>
        </HStack>
    )
}

export default InputSlider