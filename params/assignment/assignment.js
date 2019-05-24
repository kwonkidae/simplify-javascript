function land() {
  const landscape = {
    title: 'Landscape',
    photographer: 'Nathan',
    location: [ 32.712222, -103.1405556 ],
  };

  const update = {
    title: 'Landscpae',
    photographer: 'Nathan',
    city: 'Hobbs',
    state: 'NM',
  }

  const region = {
    city: 'Hobbs',
    county: 'Lea',
    state: {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
  };
}

function determineCityAndState([latitude, longitude]) {
  const region = {
    city: 'Hobbs',
    county: 'Lea',
    state: {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
  };
  return region; 
}

function getCityAndState({ location }) {
  const { city, state } = determineCityAndState(location);
  return {
    city,
    state: state.abbreviation,
  };
}

function setRegion({ location, ...details }) {
  const { city, state } = determineCityAndState(location);
  return {
    city,
    state: state.abbreviation,
    ...details,
  };
}
