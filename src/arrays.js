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
  const reversedWords = [];
  strings.forEach(string => {
    const reversedString = [];
    const stringArray = string.split('');
    for (let i = stringArray.length - 1; i >= 0; i -= 1) {
      reversedString.push(stringArray[i]);
    }
    reversedWords.push(reversedString.join(''));
  });
  return reversedWords;
};

const onlyEven = numbers => {
  const evenNumbers = [];
  numbers.forEach(number => {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  });
  return evenNumbers;
};

const removeNthElement2 = (index, array) => {
  const newArray = [...array];
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  const vowelArray = [];
  strings.forEach(string => {
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
  });
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
    array.forEach(string => {
      const reversedString = string
        .split('')
        .reverse()
        .join('');
      reversedArray.push(reversedString);
    });
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
