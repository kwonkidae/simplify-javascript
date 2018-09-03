const cart = [
  {
    name: 'The Foundation Triology',
    price: 19.99,
    discount: false,
  },
  {
    name: 'Godel, Escher, Bach',
    price: 15.99,
    discount: false,
  },
  {
    name: 'Red Mars',
    price: 5.99,
    discount: true,
  }
];

const reward = {
  name: 'Guide to Science Fiction', 
  discount: true,
  price: 0,
  };
  

function addFreeGift(cart) {
  if (cart.length > 2) {
    cart.push(reward);
    return cart;
  }
  return cart;
}

function summarizeCart(cart) {
  const discountable = cart.filter(item => item.discount);
  if (discountable.length > 1) {
    return {
      error: 'Can only have one discount',
    };
  }

  const cartWithReward = addFreeGift(cart);
  console.log(cartWithReward);
  return {
    discounts: discountable.length
  }
}

summarizeCart(cart);

function summarizeCartUpdated(cart) {
  const cartWithReward = addFreeGift(cart);
  const discountable = cart.filter(item => item.discount);
  if (discountable.length > 1) {
    return {
      error: 'Can only have one discount',
    };
  }
  return {
    discount: discountable.length,
    items: cartWithReward.length,
    cart: cartWithReward,
  }
}

console.log(summarizeCartUpdated(cart));

function addGift(cart) {
  if (cart.length > 2) {
    return [...cart, reward];
  }
  return cart;
}

let titles = ['Mody Dick', 'White Teeth'];
let moreTitles = [...titles, 'The Conscius Mind'];

moreTitles = ['Moby Dick', 'White Teeth'];
const evenMoreTitles = ['The Conscious Mind', ...moreTitles];

const toCopy = ['Mody Dick', 'White Teeth'];
const copied = toCopy.slice();
console.log(copied)

const moreCopies = ['Mody Dick', 'White Teeth'];
const moreCopied = [...moreCopies];

console.log(moreCopied);

// titles.unshift('The Conscious Mind');
// console.log(titles);







