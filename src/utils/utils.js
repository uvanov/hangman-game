export const getRandomNumberFromRange = max => {
  console.log('getRandomNumberFromRange');
  return Math.floor(Math.random() * max);
};

export const getRandomFromArray = array => {
  console.log('getRandomFromArray');
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

export const addSpoilersToWord = word => {
  console.log('addSpoilersToWord');
  const replacement = '_';
  let spoileredWord = word;

  for (let cycleIndex = 0; cycleIndex < 2; cycleIndex++) {
    let index = getRandomNumberFromRange(word.length);
    spoileredWord = spoileredWord.substring(0, index) + replacement + spoileredWord.substring(index + replacement.length);
  }
  return spoileredWord;
};