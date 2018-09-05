const title = 'manager';
let permissions
if (title === 'manager') {
  permissions = ['time', 'pay'];
} else {
  permissions = ['time'];
}

console.log(permissions);

permissions = title === 'manager' ? ['time', 'pay'] : ['time'];

console.log(permissions);

function getTimePermissions({title}) {
  if (title === 'manager') {
    return ['time', 'overtimeAuthorization', 'pay'];
  }

  if (title === 'supervisor') {
    return ['time', 'overtimeAuthorization'];
  }
  return ['time'];
}

permissions = getTimePermissions({ title : 'employee' });

console.log(permissions);
