const validator = {
  message: 'is invalid.',
  setInvalidMessages(...fields) {
    console.log(fields.length)
    var message = 'kkdosk';
    return fields.map(function (field) {
      return `${field} ${this.message}`
    })
  }
}
const field = 'city';
const message = 'messgae';
function simple () {
  this.message = 'message';
  console.log(validator.setInvalidMessages('city'));
}

simple();

