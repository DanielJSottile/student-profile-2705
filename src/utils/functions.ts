export const average = (arr: number[]) =>
  arr.reduce((a, b) => a + b, 0) / arr.length;

export const nameContainsSubstring = (name: string, input: string) => {
  return name.toLowerCase().startsWith(input.toLowerCase())
}

export const arrayContainsSubstring = (arr: string[], input: string) => {
  return !!arr.filter((element) =>
    element.toLowerCase().startsWith(input.toLowerCase())
  ).length || !input;
};
