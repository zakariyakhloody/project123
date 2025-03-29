function calculateSum(numbers: number[]): number {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

function filterEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(number => number % 2 === 0);
}
