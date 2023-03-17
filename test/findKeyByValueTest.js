const assertEqual = require("../assertEqual");
const findKeyByValue = require("../findKeyByValue");

// TEST CODE

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "The Big Bang Theory",
  drama: "Grey's Anatomy",
};

const bestBandsByGenre = {
  rock: "Foo Fighters",
  pop: "Coldplay",
  indie: "The Neighbourhood",
  pagode: "Exaltasamba",
  axé: "Banda Eva",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Big Bang Theory"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Grey's Anatomy"), "drama");

assertEqual(findKeyByValue(bestBandsByGenre, "Ivete Sangalo"), "axé");
assertEqual(findKeyByValue(bestBandsByGenre, "Foo Fighters"), "rock");
assertEqual(findKeyByValue(bestBandsByGenre, "Coldplay"), undefined);
