const petFilters = new Map();
function addFilters(filters, key, value) {
  filters.set(key, value);
}

function deleteFilters(filters, key) {
  filters.delete(key);
}

function clearFilters(filters) {
  filters.clear();
}

let errors = {
  100: 'Invalid name',
  110: 'Name should only contain letters',
  200: 'Invalud color'
};

function isDataValid(data) {
  if (data.length < 10)  {
    return errors[100];
  }
  return true;
}

isDataValid([]);

console.log(Object.keys(errors));

errors = new Map([
  [100, 'Invalid name'],
  [110, 'Name should only contain letters'],
  [200, 'Invalid color']
]);

console.log(errors.get(100));
console.log(errors.keys());
