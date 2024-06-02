var b = 1
for (let b = 1; b <= 100; b++) {
    console.log(b)
    if (b % 3 == 0) {
        console.log("Fizz")
    } if (b % 5 == 0) {
        console.log("Buzz")
    } if (b % 3 == 0 & b % 5 == 0) {
        console.log("FizzBuzz")
    }
}