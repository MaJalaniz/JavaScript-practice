


/*
// Fibonacci Sequence
let i;
let fib = [];

fib[0] = 0;
fib[1] = 1;

for (i = 2; i <= 10; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
}
*/


//Give me amount used

const generateCoinChange = cents => {
    let five = Math.floor(cents/5);
    cents -= 5*five;
    let three = Math.floor(cents/3);
    cents -= 3*three;
    let one = Math.floor(cents/1);
    cents -= one;
    console.log(five + three + one)
};
generateCoinChange(49);