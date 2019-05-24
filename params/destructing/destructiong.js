let landscape = { 
  title: 'Landscape', 
  photographer: 'Nathan', 
  equipment: 'Canon', 
  format: 'digital',
  src: '/landscape-nm.jpg',
  location: [32.7122222, -103.1405556],
};

function displayPhoto(photo) {
  const {
    title,
    photographer = 'Anonymous',
    location: [latitude, longitude],
    src: url,
    ...other
  } = photo;

  const additional = Object.keys(other).map(key => `${key}: ${other[key]}`);

  return (`
    <img alt="Photo of ${title} by ${photographer}" src="${url}" /> <div>${title}</div>
    <div>${photographer}</div>
    <div>Latitude: ${location[0]} </div>
    <div>Longitude: ${location[1]} </div>
    <div>${additional.join(' <br/> ')}</div>
  `);
}

landscape = {
  photographer: 'Nathan',
};

let { photographer } = landscape;

function defaultTest() {
  const landscape = {};

  const { photographer = 'Anonymous', title } = landscape;

  console.log(photographer, title);
}
defaultTest();

function dot() {
  const landscape = {
    photographer: 'Nathan',
    equipment: 'Canon',
    format: 'digital',
  };

  const {
    photographer,
    ...additional
  } = landscape;

  console.log(photographer, additional);
}

dot();

function keyName() {
  const landscape = {
    src: '/landscape-nm.jpg',
  };

  const {'src': url} = landscape;
  console.log(url);
}

keyName();

function loc() {
  const landscape = {
    location: [32.712222, -103.1405556],
  };

  const { location: [latitude, longitude] } = landscape;
  console.log(latitude, longitude);
}

loc();
