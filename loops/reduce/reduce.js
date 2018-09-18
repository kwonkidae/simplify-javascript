let callback = function(collectedValues, item) {
  return [...collectedValues, item];
}

let saying = ['veni', 'vedi', 'veci'];
let initialValue = [];
let copy = saying.reduce(callback, initialValue);

console.log(copy);

const dogs = [ 
  {
    name: 'max',
    size: 'small',
    breed: 'boston terrier', 
    color: 'black',
  },
  {
    name: 'don',
    size: 'large', 
    breed: 'labrador', 
    color: 'black',
  },
  {
    name: 'shadow', 
    size: 'medium', 
    breed: 'labrador', 
    color: 'chocolate',
  }
];
console.log(dogs);

let colors = dogs.reduce((colors, dog) => {
  if (colors.includes(dog.color)) {
    return colors;
  }
  return [...colors, dog.color];
}, []);

console.log(colors);

// (function mistake () {
//   let colors = dogs.reduce((colors, dog) => {
//     if (colors.includes(dog.color)) {
//       return colors;
//     }
//     [...colors, dog.color];
//   }, []);
//   console.log(colors);
// })();

(function map() {
  let colors = dogs.map(dog => dog.color);
  console.log(colors);

  colors = dogs.reduce((colors, dog) => {
    return [...colors, dog.color];
  }, []);

  console.log(colors);
})();

let filters = dogs.reduce((filters, item) => {
  filters.breed.add(item.breed);
  filters.size.add(item.size);
  filters.color.add(item.color);
  return filters;
},
{
  breed: new Set(),
  size: new Set(),
  color: new Set(),
});

console.log(filters);

const developers = [ 
  {
    name: 'Jeff',
    language: 'php', 
  },
  {
    name: 'Ashley', 
    language: 'python',
  }, 
  {
    name: 'Sara',
    language: 'python', 
  },
  {
  name: 'Joe',
  language: 'javascript',
  }, 
];

let aggregated = developers.reduce((specialities, developer) => {
  const count = specialities[developer.language] || 0;
  return {
    ...specialities,
    [developer.language]: count + 1,
  };
}, {});

console.log(aggregated);

let temp = "kkdosk";

let obj = {
  temp: 'kkdosk'
};

console.log(obj);
