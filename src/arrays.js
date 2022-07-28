const getNthElement = (index, array) => {
  let i = index;
  const highestIndex = array.length - 1;
  while (i > highestIndex) {
    i -= array.length;
  }
  return array[i];
};

const arrayToCSVString = array => {
  return array.toString();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  const reversedWords = [];
  strings.forEach(string => {
    const reversedString = string
      .split('')
      .reverse()
      .join('');
    reversedWords.push(reversedString);
  });
  return reversedWords;
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter(element => array.indexOf(element) !== index);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(string => {
    const firstLetter = string.charAt(0).toLowerCase();
    if (
      firstLetter === 'a' ||
      firstLetter === 'e' ||
      firstLetter === 'i' ||
      firstLetter === 'o' ||
      firstLetter === 'u'
    ) {
      return true;
    }
    return false;
  });
};

const removeSpaces = string => {
  return string.replace(/ /g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((prev, curr) => prev + curr, 0);
};

const sortByLastLetter = strings => {
  return reverseWordsInArray(reverseWordsInArray(strings).sort());
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
