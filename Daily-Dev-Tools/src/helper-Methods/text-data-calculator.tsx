const textStatCalculator = (input: string) => {
    const characters = input.length
    const words = input === "" ? 0 : input.split(" ").length
    const lines = input === "" ? 0 : input.split('\n').length
    const paragraphs = input === "" ? 0 : input.split('\n\n').length
    console.log(input)
    return { characters, words, lines, paragraphs }

}

export default textStatCalculator