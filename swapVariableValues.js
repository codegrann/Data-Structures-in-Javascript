// Swapping Variables Values

let a="one";
let b="two";
console.log(a, b);

// Introducing a new holder variable
// let c=a;
// a=b;
// b=c;
// console.log(a, b);

// Using destructuring
[a, b]=[b, a];
console.log(a, b); 

function getNthFibo(n) {
        if (n <= 1) {
            console.log(n);
        } else {
            console.log(getNthFibo(n - 1) + getNthFibo(n - 2));
        }
    }
    getNthFibo(2)