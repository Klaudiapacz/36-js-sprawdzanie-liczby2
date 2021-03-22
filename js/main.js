let a = 9;
let b = 10;

const numbersCompare = (a, b) => {
    var x = true;
    if ((a === 20) || (b === 20) || ((a + b) >= 20)) {
        return x;
    } else {
        return !x;
    }

}

console.log(numbersCompare(a, b));

