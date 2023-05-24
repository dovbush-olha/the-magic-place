export function getRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomQuote(array: any[]) {
  return array[getRandom(0, array.length)];
}
