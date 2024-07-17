import { loremIpsum } from "react-lorem-ipsum";

interface Props {
    paragraphs: number,
    words: number,
    sentences: number,
    random: boolean
}

const textGen = ({ paragraphs, words, sentences, random }: Props) => {
    const paragraphsArray = loremIpsum({
        p: paragraphs,
        avgWordsPerSentence: words,
        avgSentencesPerParagraph: sentences,
        random: random
    });

    const combinedText = paragraphsArray.map(paragraph => paragraph).join('\n\n\n');

    return combinedText;
}

export default textGen;