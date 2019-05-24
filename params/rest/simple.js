function validationCharacterCount(max, items) {
  return items.every(item => item.length < max);
}

function valid() {
  console.log(validationCharacterCount(10, ['Hobbs', 'Eagles']));
  try {
    validationCharacterCount(10, 'wvoquine');
  } catch (e) {
    console.error('error: ', e);
  }
}

valid();

