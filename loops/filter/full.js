(() => {
  const instructors = [ {
      name: 'Jim',
      libraries: ['MERIT'], 
    },
    {
      name: 'Sarah',
      libraries: ['Memorial', 'SLIS'],
    }, 
    {
      libraries: ['College Library'], 
    },
  ];

  console.log(instructors);

  let librarian = instructors.find(instructor => {
    return instructor.libraries.includes("Memorial");
  });

  console.log(librarian);


  const images = [ 
    {
      path: './me.jpg',
      profile: false 
    }
  ];

  const profile = images.find(image => image.profile) || {
    path: './default.jpg'
  };

  console.log(profile);

  const findByLibrary = library => instructor => {
    return instructor.libraries.includes(library);
  }

  librarian = instructors.find(findByLibrary('MERIT'));

  console.log(librarian);
})
// ();

;(()=>{
  const team = [
    'Michelle B',
    'Dave L',
    'Dave C',
    'Courtney B',
    'Davina M',
  ];
  const daves = [];
  for (let i = 0; i < team.length; i++) {
    if (team[i].match(/Dav/)) {
      daves.push(team[i]);
    }
  }
  console.log(daves);
})
// ();

;(()=>{
  const scores = [30, 82, 70, 45];
  function getNumberOfPassingScores(scores) {
    const passing = scores.filter(score => score > 59);
    
    return passing.length;
  }

  console.log(getNumberOfPassingScores(scores));
})
();
