// Initialise a constructor function
function Stack(array) {
    this.array = [];
    if (array) this.array = array;
    this.isEmpty = function () {
        console.log(this.array.length == 0);
    };
}

Stack.prototype.state = function () {
    console.log(this.array);
}
// Stack.prototype.isEmpty = function () {
// console.log(this.array.length == 0);
// };
Stack.prototype.add = function (element) {
    this.array.push(element);
}
Stack.prototype.remove = function () {
    this.array.pop();
}
Stack.prototype.accessNthElement = function (n) {
    while(--n != 0){
    this.array.pop();
    }
    return this.array.pop();

}




let stack1 = new Stack([1, 2, 3]);
stack1.state();
stack1.isEmpty();
stack1.add(4);
console.log(stack1)
stack1.remove();
console.log(stack1)
console.log(stack1.accessNthElement(2));


let myArr=[5,8,7];
let yourArr=[9,10];
console.log(myArr.splice(1, 2, ...yourArr));
console.log(myArr)
