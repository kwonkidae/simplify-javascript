const team = [
  'Joe',
  'Dyan',
  'Bea',
  'Theo',
];

function alphabetizeTeam(team) {
  return [...team].sort();
}

console.log(alphabetizeTeam(team));

const staff = [
  {
    name: 'Wesley',
    position: 'musician',
  },
  {
    name: 'Davis',
    position: 'engineer',
  },
];

function getMusicians(staff) {
  return staff.filter(member => member.position === 'musician');
}

console.log(getMusicians(staff));

const game1 = {
  player: 'Jim Jonas',
  hits: 2,
  runs: 1,
  errors: 0,
};

const game2 = {
  player: 'Jim Jonas',
  hits: 3,
  runs: 0,
  errors: 1,
};

const total = {};

const stats = Object.keys(game1);
for (let i = 0; i < stats.length; i++) {
  const stat = stats[i];
  if (stat !== 'player') {
    total[stat] = game1[stat] + game2[stat];
  }
}

console.log(total);

const dog = {
  name: 'Don',
  color: 'black',
};

const dogPair = [
  ['name', 'Don'],
  ['color', 'black'],
];

function getName(dog) {
  return dog.find(attribute => {
    return attribute[0] === 'name';
  })[1];
}

console.log(getName(dogPair));
