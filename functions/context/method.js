const validator = {
  message: 'is invalid.',
  setInvalidMessage: field => `${field} ${this.message}`,
}

console.log(validator.setInvalidMessage('city'))
