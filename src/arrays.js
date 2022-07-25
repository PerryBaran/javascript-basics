const getNthElement = (index, array) => {
  let i = index;
  const length = array.length - 1;
  while (i > length) {
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
  const arrayClone = [...array];
  arrayClone.push(element);
  return arrayClone;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  const strings = [];
  const { length } = numbers;
  for (let i = 0; i < length; i += 1) {
    strings.push(numbers[i].toString());
  }
  return strings;
};

const uppercaseWordsInArray = strings => {
  const upperCase = [];
  const { length } = strings;
  for (let i = 0; i < length; i += 1) {
    upperCase.push(strings[i].toUpperCase());
  }
  return upperCase;
};

const reverseWordsInArray = strings => {
  const reversed = [];
  const stringsLength = strings.length;
  for (let i = 0; i < stringsLength; i += 1) {
    const string = strings[i].split('');
    const reversedString = [];
    for (let j = string.length - 1; j >= 0; j -= 1) {
      reversedString.push(string[j]);
    }
    reversed.push(reversedString.join(''));
  }
  return reversed;
};

const onlyEven = numbers => {
  const evenNumbers = [];
  const { length } = numbers;
  for (let i = 0; i < length; i += 1) {
    const number = numbers[i];
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const vowelArray = [];
  const { length } = strings;
  for (let i = 0; i < length; i += 1) {
    const string = strings[i];
    const firstLetter = string.charAt(0).toLowerCase();
    if (
      firstLetter === 'a' ||
      firstLetter === 'e' ||
      firstLetter === 'i' ||
      firstLetter === 'o' ||
      firstLetter === 'u'
    ) {
      vowelArray.push(string);
    }
  }
  return vowelArray;
};

const removeSpaces = string => {
  return string.replace(/ /g, '');
};

const sumNumbers = numbers => {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum;
};

const sortByLastLetter = strings => {
  const reverseStrings = array => {
    const reversedArray = [];
    const { length } = array;
    for (let i = 0; i < length; i += 1) {
      const stringArray = array[i].split('');
      stringArray.reverse();
      const reversedString = stringArray.join('');
      reversedArray.push(reversedString);
    }
    return reversedArray;
  };
  const reversedStrings = reverseStrings(strings);
  reversedStrings.sort();
  return reverseStrings(reversedStrings);
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
