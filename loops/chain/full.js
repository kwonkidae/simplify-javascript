const sailors = [
  {
    name: 'yi hong',
    active: true,
    email: 'yh@yhproductions.io',
  },
  {
    name: 'alex',
    active: true,
    email: '',
  },
  {
    name: 'nathan',
    active: false,
    email: '',
  },
];

console.log(sailors);
let active = sailors.filter(sailor => sailor.active);
console.log(active);

let emails = active.map(member => member.email || `${member.name}@wiscsail.io`);
console.log(emails);

sailors.filter(sailor => sailor.active)
       .map(sailor => sailor.email || `${sailor.name}@wiscsail.io`)
       .forEach(sailor => console.log(sailor));
