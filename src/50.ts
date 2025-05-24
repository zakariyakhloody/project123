function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
const randomNum = getRandomInt(10, 50);
console.log(randomNum); // Output might be a random integer between 10 and 50
