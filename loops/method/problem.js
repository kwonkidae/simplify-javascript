let prices = ['1.0', '2.15'];

const formattedPrices = [];
for (let i = 0; i < prices.length; i++) {
  formattedPrices.push(parseFloat(prices[i]));
}

console.log(formattedPrices);

formattedPrices.length = 0;

console.log(formattedPrices);

prices = ['1.0', 'negotiable', '2.15'];

for (let i = 0; i < prices.length; i++) {
  const price = parseFloat(prices[i]);
  if (price) {
    formattedPrices.push(price);
  }
}

console.log(formattedPrices);

const team = [ 
  {
    name: 'melinda',
    position: 'ux designer' 
  },
  {
    name: 'katie',
    position: 'strategist' 
  },
  {
    name: 'madhavi',
    position: 'developer' 
  },
  {
    name: 'justin',
    position: 'manager' 
  },
  {
    name: 'chris',
    position: 'developer' 
  }
]

const prc = ['1.0', '2.15'];
let _formattedPrices = prc.map(price => parseFloat(price));

console.log(_formattedPrices);

_formattedPrices = prices.map(price => parseFloat(price))
  .filter(price => price);

console.log(_formattedPrices);
