const createPerson = (name, age) => {
  return {
    name,
    age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  if (object[property]) {
    return true;
  }
  return false;
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  return false;
};

const getAges = people => {
  const ageArray = [];
  people.forEach(person => {
    ageArray.push(person.age);
  });
  return ageArray;
};

const findByName = (name, people) => {
  const { length } = people;
  for (let i = 0; i < length; i += 1) {
    const person = people[i];
    if (person.name === name) {
      return person;
    }
  }
  return undefined;
};

const findHondas = cars => {
  const hondas = [];
  cars.forEach(car => {
    if (car.manufacturer === 'Honda') {
      hondas.push(car);
    }
  });
  return hondas;
};

const averageAge = people => {
  let totalAge = 0;
  people.forEach(person => {
    totalAge += person.age;
  });
  return Math.round(totalAge / people.length);
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce: person => `Hi ${person}, my name is ${name} and I am ${age}!`
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
