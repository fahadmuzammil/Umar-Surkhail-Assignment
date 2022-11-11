const sumPositive = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; ++i) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
};


// Usage example:

const result = sumPositive([1, 2, 3, 5, 6, 7, -4, -5, -6]);

console.log(result); // 6