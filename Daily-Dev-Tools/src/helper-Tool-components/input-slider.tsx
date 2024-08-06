import { HStack, Input, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

interface Props {
    placeholder: string,
    minVal: number,
    maxVal: number,
    step: number,
    value: number,
    onChange: (value: number) => void
}

const InputSlider = ({ placeholder, minVal, maxVal, step, value, onChange }: Props) => {
    const [inputValue, setInputValue] = useState(value);
    const [showTooltip, setShowTooltip] = useState(false)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        if (newValue >= minVal && newValue <= maxVal) {
            setInputValue(newValue);
            onChange(newValue);
        }
    };

    const handleSliderChange = (value: number) => {
        setInputValue(value);
        onChange(value);
    };

    return (
        <HStack spacing={5}>
            <Input
                placeholder={placeholder}
                size="xs"
                value={inputValue <= maxVal ? inputValue : maxVal}
                onChange={handleInputChange}
                focusBorderColor="white"
            />
            <Slider
                min={minVal}
                max={maxVal}
                step={step}
                value={inputValue}
                onChange={handleSliderChange}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
            >
                <SliderTrack bg='white'>
                    <SliderFilledTrack bg='tomato' />
                </SliderTrack>
                <Tooltip
                    hasArrow
                    bg='teal.500'
                    color='white'
                    placement='top'
                    isOpen={showTooltip}
                    label={`${value}`}>
                    <SliderThumb boxSize={4} />
                </Tooltip>
            </Slider>
        </HStack>
    );
};

export default InputSlider;
