const defaults = {
  author: '',
  title: '',
  year: 2017,
  rating: null,
};

const book = {
  author: 'Joe Morgan',
  title: 'Simplifying Javascript',
};

function addBookDefaults(book, defaults) {
  const fields = Object.keys(defaults);
  const updated = {};

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    updated[field] = book[field] || defaults[field];
  }
  return updated;
}

console.log(addBookDefaults(book, defaults));
Object.assign(defaults, book);

console.log(defaults);

const anotherBook = {
  title: 'Another book',
  year: 2016,
};

Object.assign(defaults, anotherBook);

console.log(defaults);

const u = Object.assign({}, defaults, book);
console.log(u);

const defaultEmployee = {
  name: {
    first: '',
    last: '',
  },
  years: 0,
};

const employee = Object.assign({}, defaultEmployee);




const employee2 = Object.assign(
  {},
  defaultEmployee,
  {
    name: Object.assign({}, defaultEmployee.name),
  },
);
employee.name.first = 'Joe';
console.log(defaultEmployee);
console.log(employee2);
