const sections = ['shipping'];

function displayShipping(sections) {
  if (sections.indexOf('shipping')) {
    return true;
  }
  return false;
}

function displayShipping2(sections) {
  return sections.indexOf('shipping') > -1;
}

function includes(sections) {
  return sections.includes('shipping');
}

console.log(displayShipping(sections));
console.log(displayShipping2(sections));
console.log(includes(sections));
