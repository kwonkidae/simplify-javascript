const sailingClub = [ 
  'yi hong',
  'andy',
  'darcy',
  'jessi', 
  'alex', 
  'nathan',
];

console.log(sailingClub);

for (let i = 0; i < sailingClub.length; i++) {
  sendMail(sailingClub[i]);
}

function sendMail(club) {
  console.log(club);
} 

let names = ['walter', 'white'];
let capitalized = names.forEach(name => name.toUpperCase());

console.log(capitalized);

capitalized = [];
names.forEach(name => capitalized.push(name.toUpperCase()));

console.log(capitalized);

sailingClub.forEach(member => sendMail(member));
