/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom(a,b) {
    return Math.floor((Math.random() * b) + a);
}
console.log(generateRandom(0,9));