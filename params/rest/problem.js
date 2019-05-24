function getArguments() {
  return arguments;
}

function validationCharacterCount(max) {
  const items = Array.prototype.slice.call(arguments, 1);
  console.log(items);
  return items.every(item => item.length < max);
}

function get() {
  console.log(getArguments('Bloomsday', 'June 16'));
  console.log(validationCharacterCount(10, 'wvoquie'));
  const tags = ['Hobbs', 'Eagles'];
  console.log(validationCharacterCount(10, ...tags));
}

get();
