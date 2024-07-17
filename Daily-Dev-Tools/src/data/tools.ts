const comparers = [
  {
    name: "Json Comparer",
    path: "/JsonComparer",
    description: "Compare data of 2 json files and compare their differences.",
  },
  {
    name: "Text Comparer",
    path: "/TextComparer",
    description: "Simply compare two text files to spot out the differences",
  },
];
const formatters = [
  {
    name: "Json Formatter",
    path: "/JsonFormatter",
    description: "Format your json files to a readable format.",
  },
  {
    name: "SQL Formatter",
    path: "/SQLFormatter",
    description: "Format your sql queries to readable format.",
  },
  {
    name: "Curl Formatter",
    path: "/CurlFormatter",
    description: "Format your curl commands to a readable format.",
  },
];

const textComponents = [
  {
    name: "Lorem-Ipsum Generator",
    path: "/LoremIpsumGenerator",
    description: "Generate random text using Lorem-Ipsum API.",
  },
  {
    name: "Character Count",
    path: "/CharacterCount",
    description:
      "Count the number of words, letters, lines and paragraphs in your text.",
  },
];

const componentNames = {
  jsonFormatter: "JSON Formatter",
  sqlFormatter: "SQL Formatter",
  curlFormatter: "Curl Formatter",
  loremIpsumGenerator: "Lorem-Ipsum Generator",
  characterCount: "Character Count",
  jsonComparer: "Json Comparer",
  textComparer: "Text Comparer",
  jsonValidator: "Json Validator",
  testComponent: "Shit-testing-component",
};
export { comparers, formatters, textComponents, componentNames };
