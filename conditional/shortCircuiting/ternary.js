function getIconPath(icon) {
  const path = icon.path ? icon.path : 'uploads/default.png';
  return `https://assets.foo.com/${path}`;
}

const icon = {
  path: 'acme/bar.png'
};

console.log(getIconPath(icon));

const userConfig1 = {

};

const userConfig2 = {
  images: []
};

const userConfig3 = {
  images: [
    'me.png',
    'work.png'
  ]
}

// const img = userConfig1.images[0] || 'default.png';

function getFirstImage(userConfig) {
  let img = 'default.png';
  if (userConfig.images) {
    img = userConfig.images[0];
  }
  return img;
}

const img = getFirstImage(userConfig2);

console.log(img);

function getImage(userConfig) {
  let img = 'default.png';
  if (userConfig.images) {
    if (userConfig.images.length) {
      img = userConfig.images[0];
    }
  }
  return img;
}

console.log(getImage(userConfig2));

function getImageV2(userConfig) {
  if (userConfig.images && userConfig.images.length > 0) {
    return userConfig.images[0];
  }
  return 'default.png';
}

console.log(getImageV2(userConfig2));

function getImageV3(userConfig) {
  const images = userConfig.images;
  return images && images.length ? images[0] : 'default.png';
}

console.log(getImageV3(userConfig2));

function getImageV4(userConfig) {
  const images = userConfig.images;
  return images && images.length && images[0].indexOf('gif') < 0 ? images[0] : 'default.png';
}

console.log(getImageV4(userConfig2));
