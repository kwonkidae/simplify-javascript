console.log(1 == '1');
console.log(1 === '1');
console.log(1 === 1);

console.log('' == false);
if('') {
  console.log('I am not false!');
} else {
  console.log('I am false :( !');
}

let employee = {
  name: 'Eric',
  equipmentTraining: '',
}

if(!employee.equipmentTraining) {
  console.log('Not authorized to operate machinery');
}

console.log(['a', 'b'].indexOf('a'));

employee = {
  name: 'Eric',
  equipmentTraining: true,
};

function listCerts(employee) {
  if(employee.equipmentTraining) {
    employee.certificates = ['Equipment'];

    delete employee.equipmentTraining;
  }
}

function checkAuthorization() {
  if(!employee.equipmentTraining) {
    return 'Not authorized to operate machinery';
  }
  return 'Hello, ${employee.name}';
}

function checkAuthorizationV2() {
  if(!employee.equipmentTraining !== true) {
    return 'Not authorized to operate machinery';
  }
  return `Hello, ${employee.name}`;
}

listCerts(employee);
console.log(checkAuthorizationV2(employee));
