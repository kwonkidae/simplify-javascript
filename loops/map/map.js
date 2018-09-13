const band = [ 
  {
    name: 'corbett',
    instrument: 'guitar', 
  },
  {
    name: 'evan', 
    instrument: 'guitar',
  },
  {
    name: 'sean', 
    instrument: 'bass',
  }, 
  {
    name: 'brett',
    instrument: 'drums', 
  },
];

console.log(band.length);

let instruments = [];
for (let i = 0; i < band.length; i++) {
  const instrument = band[i].instrument;
  instruments.push(instrument);
}

console.log(instruments);

function getInstrument(member) {
  return member.instrument;
}

instruments = band.map(getInstrument);

console.log(instruments);

instruments = band.map(member => member.instrument);

const scores = [30, 82, 70, 45];
function getNumberOfPassingScores(scores) {
  const passing = scores.filter(score => score > 59);
  console.log(passing);
  return passing.length;
}

console.log(getNumberOfPassingScores(scores));
