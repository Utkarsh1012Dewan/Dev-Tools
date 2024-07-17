const textStatCalculator = (input: string) => {
    const characters = input.length;
    const words = input.trim() === "" ? 0 : input.trim().split(/\s+/).length;
    const lines = input.trim() === "" ? 0 : input.trim().split('\n').length;
    const paragraphs = input.trim() === "" ? 0 : input.trim().split(/\n{2,}/).length;

    return { characters, words, lines, paragraphs };
}

export default textStatCalculator;