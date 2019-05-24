const comic = {
  first: 'Peter',
  last: 'Bagge',
  city: 'Seattle',
  state: 'Washington',
};

const getName = ({ first, last }) => `${first} ${last}`;

console.log(getName(comic));

const getFullName = ({ first, last }) => ({ fullName: `${first} ${last}`});

console.log(getFullName(comic));

const getNameAndLocation = ({first, last, city, state}) => ({
    fullName: `${first} ${last}`,
    location: `${city}, ${state}`,
});

console.log(getNameAndLocation(comic));

const discounter = discount => price => price * (1 - discount);

console.log(discounter(0.1)(100));
