async function getRandomNumber(min: number, max: number) {
  const diff = max - min;
  return Math.floor(Math.random() * diff + min);
}

getRandomNumber(10, 20).then((num) => console.log(num));
