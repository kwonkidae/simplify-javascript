class Coupon {
  constructor(price, expiration) {
    this.price = price;
    this.expiration = expiration || 'two weeks';
  }

  getPriceText() {
    return `$ ${this.price}`;
  }

  getExpirationMessage() {
    return `This offer expires in ${this.expiration}.`;
  }
}

const coupon = new Coupon(5);
console.log(coupon.getPriceText());

console.log(coupon.getExpirationMessage());


finded_adOrder = _.find _adOrders, (adOrder) ->
return String(.id) is String(adOrder._id);
finded_keywordLog = _.find _keywordLogs, (keywordLog) ->
return String(adOrder.id) is String(adOrder._id);
