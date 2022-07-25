function negate(a) {
  return !a;
}

function both(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

function either(a, b) {
  if (a || b) {
    return true;
  }
  return false;
}

function none(a, b) {
  if (a || b) {
    return false;
  }
  return true;
}

function one(a, b) {
  if ((a && !b) || (!a && b)) {
    return true;
  }
  return false;
}

function truthiness(a) {
  if (a) {
    return true;
  }
  return false;
}

function isEqual(a, b) {
  if (a === b) {
    return true;
  }
  return false;
}

function isGreaterThan(a, b) {
  if (a > b) {
    return true;
  }
  return false;
}

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  }
  return false;
}

function isOdd(a) {
  if (a % 2 !== 0) {
    return true;
  }
  return false;
}

function isEven(a) {
  if (a % 2 === 0) {
    return true;
  }
  return false;
}

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  }
  return false;
}

function startsWith(char, string) {
  if (string.charAt(0) === char) {
    return true;
  }
  return false;
}

function containsVowels(string) {
  const stringArray = string.split('');
  const { length } = stringArray;
  for (let i = 0; i < length; i += 1) {
    const letter = stringArray[i].toLowerCase();
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      return true;
    }
  }
  return false;
}

function isLowerCase(string) {
  if (string.toLowerCase() === string) {
    return true;
  }
  return false;
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
