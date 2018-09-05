const defaults = new Map()
  .set('color', 'brown')
  .set('breed', 'beagle')
  .set('state', 'kansas');

let filters = new Map()
  .set('color', 'black');

function applyDefaultsV1(map, defaults) {
  for (const [key, value] of defaults) {
    if (!map.has(key)) {
      map.set(key, value);
    }
  }
}

function applyDefaultV2(map, defaults) {
  const copy = new Map([...map]);
  for (const [key, value] of defaults) {
    if (!copy.has(key)) {
      copy.set(key, value);
    }
  }
  return copy;
}


const result = applyDefaultV2(filters, defaults);
// console.log(result);

filters = new Map()
  .set('color', 'black')
  .set('color', 'brown');

// console.log(filters.get('color'));

filters = new Map()
  .set('color', 'black');

let filters2 = new Map()
  .set('color', 'brown');
try {
  let update = new Map([...filters, ...filters2]);
  console.log(update);
} catch(err) {
  console.log(err);
}

function applyDefaults(map, defaults) {
  return new Map([...defaults, ...map]);
}

console.log(applyDefaults(filters, defaults));
