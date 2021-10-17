/**
 * 
 * @param {number[]} arr - array of grades as numbers
 * @returns {number} - an average of the grades as a number
 */
export const average = (arr: number[]) =>
  arr.reduce((a, b) => a + b, 0) / arr.length;

/**
 * 
 * @param {string} name - a first or last name to check against
 * @param {string} input - the incoming string from a user input
 * @returns {boolean} - whether the name starts with the substring
 */
export const nameStartsWithSubstring = (name: string, input: string) => {
  return name.toLowerCase().startsWith(input.toLowerCase())
}

/**
 * 
 * @param {string[]} arr - array of strings, in this case tags
 * @param {string} input - the incoming string from a user input
 * @returns {boolean} - first, the array is filtered to elements that start with the
 * substring.  Then the length (0 or a positive integer n) is converted to a boolean.
 */
export const arrayContainsSubstring = (arr: string[], input: string) => {
  return !!arr.filter((element) =>
    element.toLowerCase().startsWith(input.toLowerCase())
  ).length;
};
