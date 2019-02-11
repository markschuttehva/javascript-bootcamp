var a;

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));

function isEven(a) {
    if (a % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }

}
