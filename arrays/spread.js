const cart = ['Naming and Necessity', 'Alice in Wonderland'];
const copyCart = [...cart, 1];

function removeItem(items, removable) {
  const updated = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] !== removable) {
      updated.push(items[i]);
    }
  }
  return updated;
}

function removeItem2(items, removable) {
  const index = items.indexOf(removable);
  const value = items.splice(index, 1);
  return items;
}

const books = ['practical vim', 'moby dick', 'the dark tower'];
const result = removeItem2(books, 'moby dict');
const novels = removeItem2(books, 'practical vim');

function removeItem3(items, removable) {
  const index = items.indexOf(removable);
  if (index < 0)
    return items;
  return items.slice(0, index).concat(items.slice(index + 1));
}

const items = [1, 2, 3];

console.log(removeItem3(items, 3));

function removeItem4(items, removable) {
  const index = items.indexOf(removable);
  return [...items.slice(0, index), ...items.slice(index + 1)];
}

console.log(removeItem4(items, 3));

const book = ['Reasons and Persons', 'Derek Parfit', 19.99];

function formatBook(title, author, price) {
  return `${title} by ${author} $${price}`;
}

console.log(formatBook(...book));
