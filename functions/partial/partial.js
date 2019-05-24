const building = {
  hours: '8 a.m. - 8 p.m.',
  address: 'Jayhawk Blvd',
};

const manager = {
  name: 'Augusto',
  phone: '555-555-5555',
};

const program = {
  name: 'Presenting Research',
  room: '415',
  hours: '3 - 6',
};

const exhibit = {
  name: 'Emerging Scholarship',
  contact: 'Dyan',
};

// overriding property
// const a = { a: '1', b: '2' };
// const b = { c: '3', b: '4' };

// const c = {...a, ...b};

function mergeProgramInformation(building, manager) {
  const { hours, address } = building;
  const { name, phone } = manager;
  const defaults = {
    hours,
    address,
    contact: name,
    phone,
  };

  return program => {
    return { ...defaults, ...program };
  }
}

const programInfo = mergeProgramInformation(building, manager)(program);
console.log(programInfo);

const exhibitInfo = mergeProgramInformation(building, manager)(exhibit);
console.log(exhibitInfo);

function getBirds(...states) {
  console.log(states);
  return ['meadowlark', 'robin', 'roadrunner'];
}

const birds = getBirds('kansas', 'wisconsin', 'new mexico');

const zip = (...left) => (...right) => {
  return left.map((item, i) => [item, right[i]]);
}

const z = zip('kansas', 'wisconsin', 'new mexico')(...birds);
console.log(z);
