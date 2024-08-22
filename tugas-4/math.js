// math.js

// Function to calculate the area of a circle based on the radius
function calculateCircleArea(radius) {
    if (radius < 0) {
        throw new Error("Radius cannot be negative");
    }
    return Math.PI * Math.pow(radius, 2);
}

// Function to square each number in an array and return a new array
function squareArray(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array");
    }
    return numbers.map(number => Math.pow(number, 2));
}

// Export the functions
module.exports = {
    calculateCircleArea,
    squareArray
};
