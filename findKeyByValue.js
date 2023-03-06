const assertEqual = function (actual, expected) {
  if (actual !== expected) {
    console.log(`Oops, ${actual} is different from ${expected}`);
  } else {
    console.log(`Yay, ${actual} is equal to ${expected}`);
  }
};

// It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
const findKeyByValue = function (obj, value) {
  // Finding the keys of the values of obj
  const objKeys = Object.keys(obj);

  // Looping thru objKeys to find the item
  for (const item of objKeys) {
    // if the item matches the value of that key in the existing obj, it will return the item
    if (obj[item] === value) {
      return item;
    }
  }
};

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
