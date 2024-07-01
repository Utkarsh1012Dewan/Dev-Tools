const curlFormatter = (input: string) => {
  return input.replace(
    /(\s-[A-Z]|--\b\w*\b)(\s\'(.*?)\')?/gm,
    (match) => match + " \\\n"
  );
};

export default curlFormatter;
