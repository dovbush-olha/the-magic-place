export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomQuote(array) {
  return array[getRandom(0, array.length)];
}
