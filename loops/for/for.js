const firms = new Map()
  .set(10, 'Ivie Group')
  .set(23, 'Soundscaping Source')
  .set(31, 'Big 6');

let entries = [...firms];

console.log(entries);

function loop() {
  for (let i = 0; i < entries.length; i++) {
    const [id, name] = entries[i];
    if (!isAvailable(id)) {
      return `${name} is not available`;
    }
  }
  return `All firms are available`;
}

function isAvailable(id) {
  return false;
}

console.log(loop());

function loop2() {
  let unavailable = [...firms].find(firm => {
    const [id] = firm;
    return !isAvailable(id);
  });

  if (unavailable) {
    return `${unavailable[1]} is not available`;
  }
}

console.log(loop2());

function reduce() {
  const message = [...firms].reduce((availability, firm) => {
    const [id, name] = firm;
    console.log(id, name);
    if (!isAvailable(id)) {
      return `${name} is not available`;
    }
    return availability;
  }, 'All firms are available');
  return message;
}

console.log(reduce());

function forLoop() {
  for (const firm of firms) {
    const [id, name] = firm;
    if (!isAvailable(id)) {
      return `${name} is not available`;
    }
  }
  return 'All firm are available';
}

console.log(forLoop());

let obj = {
  'a': 1,
  'b': 2,
}

obj = [1,2,'m']

function forIn() {
  console.log('forIn');
  for (const id in obj) {
    console.log(id);
  }
}

forIn()

