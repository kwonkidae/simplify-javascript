const config = {
  endpoint: 'http://pragrog.com',
  key: 'secretkey',
}

function twoWeeksFromNow() {
  return new Date();
}

function calculateTotal(price) {
  return price;
}

function getBill(item) {
  return {
    name: item.name,
    due: twoWeeksFromNow(),
    total: calculateTotal(item.price),
  };
}

const bill = getBill({ name: 'Room Cleaning', price: 30 });
function displayBill(bill) {
  return `Your total ${bill.total} for ${bill.name} is due on ${bill.due}`;
}

console.log(displayBill(bill));
