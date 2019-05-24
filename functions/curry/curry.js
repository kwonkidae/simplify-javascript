const dogs = [
  {
    name: 'max',
    weight: 10,
    breed: 'boston terrier',
    state: 'wisconsin',
    color: 'black',
  },
  {
    name: 'don',
    weight: 90,
    breed: 'labrador',
    state: 'kansas',
    color: 'black',
  },
  {
    name: 'shadow',
    weight: 40,
    breed: 'labrador',
    state: 'wisconsin',
    color: 'chocolate',
  },
];

function getDogNames(dogs, filterFunc) {
  // console.log('function' === typeof filterFunc);
  return dogs
  .filter(filterFunc)
  .map(dog => dog.name)
}

console.log(getDogNames(dogs, dog => dog.weight < 20));

const weightCheck = weight => dog => dog.weight < weight;

console.log(getDogNames(dogs, weightCheck(20)));

console.log(getDogNames(dogs, weightCheck(50)));

const identity = field => value => dog => dog[field] === value;
 
const colorCheck = identity('color');
const stateCheck = identity('state');

console.log(getDogNames(dogs, colorCheck('chocolate')));
console.log(getDogNames(dogs, stateCheck('kansas')));

function allFilters(dogs, ...checks) {
  return dogs
  .filter(dog => checks.every(check => check(dog)))
  .map(dog => dog.name);
}

console.log(allFilters(dogs, colorCheck('black'), stateCheck('kansas')));

function anyFilters(dogs, ...checks) {
  return dogs
  .filter(dog => checks.some(check => check(dog)))
  .map(dog => dog.name);
}

console.log(anyFilters(dogs, weightCheck(20), colorCheck('chocolate')));
