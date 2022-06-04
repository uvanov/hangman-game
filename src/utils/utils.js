export const getRandomNumberFromRange = max => {
  return Math.floor(Math.random() * max);
};

export const getRandomFromArray = array => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

export const addSpoilersToWord = word => {
  const replacement = '_';
  let spoileredWord = word;

  for (let cycleIndex = 0; cycleIndex < 2; cycleIndex++) {
    let index = getRandomNumberFromRange(word.length);
    spoileredWord = spoileredWord.substring(0, index) + replacement + spoileredWord.substring(index + replacement.length);
  }
  return spoileredWord;
};