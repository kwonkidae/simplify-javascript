let book = {
  title: 'Reasons and Persons',
  author: 'Derek Parfit',
};

let update = { ...book, year: 1984 };
console.log(update);

update = { ...book, title: 'Reasons & Persons' };
console.log(update);

const defaults = { 
  author: '', 
  title: '',
  year: 2017, 
  rating: null,
};
book = {
  author: 'Joe Morgan', 
  title: 'ES6 Tips',
};

const defaultEmployee = {
  name: {
    first: '',
    last: '',
  },
  years: 0,
};

const employee = {
  ...defaultEmployee,
  name: {
    ...defaultEmployee.name,
  },
};
defaultEmployee.name.first = 'kwon';
console.log(employee);
