function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function power(a, b) {
  return a ** b;
}

function round(a) {
  return Math.round(a);
}

function roundUp(a) {
  return Math.ceil(a);
}

function roundDown(a) {
  return Math.floor(a);
}

function absolute(a) {
  if (a < 0) {
    return -a;
  }
  return a;
}

function quotient(a, b) {
  const c = a / b;
  if (c < 0) {
    return Math.ceil(c);
  }
  return Math.floor(c);
}

function remainder(a, b) {
  return a % b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
