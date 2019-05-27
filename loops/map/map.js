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
(() => {
  const instruments = [];

  for (let i =0; i < band.length; i++) {
    const instrument = band[i].instrument;
    instruments.push(instrument);
  }
  console.log(instruments);
})
// ();


function getInstrument(member) {
  return member.instrument;
}

(()=>{
  const instruments = band.map(getInstrument);
  console.log(instruments);
  console.log(band.map(member => member.instrument));
})();


