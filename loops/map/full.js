const team = [ 
  'Michelle B', 
  'Dave L', 
  'Dave C', 
  'Courtney B', 
  'Davina M',
];
const dev = 'Dave'.match(/Dav/);
console.log(dev);

console.log(dev.toString());

const daves = [];
for (let i = 0; i < team.length; i++) {
  if (team[i].match(/Dav/)) {
    daves.push(team[i]);
  }
}

console.log(daves);

const instructors = [ 
  {
    name: 'Jim',
    libraries: ['MERIT'], 
  },
  {
    name: 'Sarah',
    libraries: ['Memorial', 'SLIS'],
  }, 
  {
    name: 'Eliot',
    libraries: ['College Library'], 
  },
];
