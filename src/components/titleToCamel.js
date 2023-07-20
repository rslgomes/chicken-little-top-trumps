export default function titleCaseToCamelCase(titleCaseString) {
  const wordsArray = titleCaseString.trim().split(/\s+/);
  const camelCaseArray = [wordsArray[0].toLowerCase()];

  for (let i = 1; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    const camelCaseWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    camelCaseArray.push(camelCaseWord);
  }
  const camelCaseString = camelCaseArray.join('');

  return camelCaseString;
}
