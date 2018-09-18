const firms = new Map()
  .set(10, 'Ivie Group')
  .set(23, 'Soundscaping Source')
  .set(31, 'Big 6');

let entries = [...firms];

console.log(entries);

function loop() {
  for (let i = 0; i < entries.length; i++) {
    const [id, name] = entries[i];
    if (!isVailable(id)) {
      return `${name} is not available`;
    }
  }
  return `All firms are available`;
}

function isVailable(id) {
  return false;
}

console.log(loop());
