function capitalize(name) {
  return name[0].toUpperCase() + name.slice(1);
}

const cap = function(name) {
  return name[0].toUpperCase() + name.slice(1);
}

const capital = name => {
  return name[0].toUpperCase() + name.slice(1);
}

function key1() {
  return 'abc123';
}

const key2 = () => {
  return 'abc123';
}

function greet(first, last) {
  return `Oh, hi ${capitalize(first)} ${capitalize(last)}`;
}

const constGreet = (first, last) => {
  return `Oh, hi ${capitalize(first)} ${capitalize(last)}`;
}

function formatUser(name) {
  return `${capitalize(name)} is logged in.`;
}

const constFormatUser = name => `${capitalize(name)} is logged in.`;

console.log(constFormatUser('kkdosk'));

function applyCustomGreeting(name, callback) {
  return callback(capitalize(name));
}

let letGreet = applyCustomGreeting('mark', function(name) {
  return `Oh, hi ${name}!`;
});

console.log(letGreet);

letGreet = applyCustomGreeting('mark', name => `Oh, hi ${name}!`);

console.log(letGreet);
