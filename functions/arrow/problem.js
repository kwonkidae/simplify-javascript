(() => {
  const name = {
    first: 'Lemmy',
    last: 'Kilmister',
  };


})();

function getName({ first, last }) {
  return {
    'fullName': `${first} ${last}`
  };
}


const discounter = discount => {
  return price => {
    return price * (1 - discount);
  };
};

const tenPercentOff = discounter(0.1);
console.log(tenPercentOff(100));
