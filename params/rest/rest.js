function getArguments(...args) {
  return args;
}

function debug() {
  const upperFilms = ['Spirited Away', 'Princess Moonoke'].map((film, ...other) => {
    console.log(other);
    return film.toLocaleUpperCase();
  });
  console.log(upperFilms);
}

function shift() {
  const queue = ['stop', 'collaborate', 'listen'];
  const [first, ...remaining] = queue;

  console.log(first, remaining);

  return [first, remaining];
}

function main() {
  console.log(getArguments('Bloomsday', 'June 16'));
  debug();
  console.log(shift());
}

main();
