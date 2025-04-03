function calculateSum(numbers) {
  let sum = 0;
  numbers.forEach(num => {
    sum += num;
  });
  return sum;
}

console.log(calculateSum([1, 2, 3, 4])); // Output: 10
