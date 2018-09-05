const dogs = [ 
  {
    name: 'max',
    size: 'small',
    breed: 'boston terrier', color: 'black'
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

let filters = {};

function addFilters(filters, key, value) {
  filters[key] = value;
}

function deleteFilters(filters, key) {
  delete filters[key];
}

function clearFilters(filters) {
  filters = {};
  return filters;
}

filters = new Map();
filters.set('breed', 'labrador')
       .set('size', 'large')
       .set('color', 'chocolate');

console.log(filters.get('size'));

filters = new Map(
  [
    ['breed', 'labrador'],
    ['size', 'large'],
    ['color', 'chocolate'],
  ]
);

console.log(filters.get('color'));
filters.delete('color');
console.log(filters.get('color'));
