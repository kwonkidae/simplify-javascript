const dogs = [
  {
    name: 'max',
    size: 'small',
    breed: 'boston terrier',
    color: 'black'
  },
  {
    name: 'don',
    size: 'large',
    breed: 'labrador',
    color: 'black'
  },
  {
    name: 'shadow',
    size: 'medium',
    breed: 'labrador',
    color: 'chocolate'
  }
];

function getColors(dogs) {
  return dogs.map(dog => dog.color);
}

console.log(getColors(dogs));

function getUnique(attributes) {
  const unique = [];
  for (const attribute of attributes) {
    if (!unique.includes(attribute)) {
      unique.push(attribute);
    }
  }
  return unique;
}

let colors = getColors(dogs);
console.log(getUnique(colors));

colors = ['black', 'black', 'chocolate'];

const unique = new Set(colors);
console.log(unique);

function getUniqueV2(attributes) {
  return [...new Set(attributes)];
}

console.log(getUniqueV2(colors));

let names = new Set();
names.add('joe');
names.add('bea');
names.add('joe');

console.log(names);

function getUniqueColors(dogs) {
  const unique = new Set();
  for (const dog of dogs) {
    unique.add(dog.color);
  }
  return [...unique];
}

console.log(getUniqueColors(dogs));

const _colors = [...dogs.reduce((colors, { color}) => colors.add(color), new Set())];
console.log(_colors);