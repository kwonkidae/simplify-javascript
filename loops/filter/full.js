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
