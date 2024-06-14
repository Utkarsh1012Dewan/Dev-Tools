import { ChangeEvent } from "react"
import { loremIpsum } from "react-lorem-ipsum"

const textGen = (paragraphs: number,
    words: number, sentences: number, random: boolean
): String => {
    const newVal = loremIpsum({
        p: paragraphs,
        avgWordsPerSentence: words,
        avgSentencesPerParagraph: sentences,
        random: random
    })

    return newVal[0];
}

export default textGen