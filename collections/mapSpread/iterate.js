
const filters = new Map()
  .set('color', 'black')
  .set('breed', 'labrador');

function checkFilters(filters) {
  for (const entry of filters) {
    console.log(entry);
  }
}

//checkFilters(filters);

const copy = new Map([...filters]);
console.log(copy);
console.log('here');
function sortByKey(a, b) {
  return a[0] > b[0] ? 1 : -1;  
}

function getSortedAppliedFiltersV1(filters) {
  const applied = [];
  for (const [key, value] of [...filters].sort(sortByKey)) {
    applied.push(`${key}:${value}`);
  }
  return `Your filters are: ${applied.join(', ')}.`;
}

function getSortedAppliedFiltersV2(filters) {
  const applied = [...filters]
    .sort(sortByKey)
    .map(([key, value]) => {
      return `${key}:${value}`;
    })
    .join(', ');

    return `Your filters are: ${applied}.`;
}

function getAppliedFilters(filters) {
  const applied = [...filters].map(([key, value]) => {
    return `${key}:${value}`;
  });
  return `Your filters are: ${applied.join(', ')}.` 
}

console.log(getAppliedFilters(filters));
console.log(getSortedAppliedFiltersV2(filters));
