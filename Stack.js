// Initialise a constructor function
function Stack(array) {
    this.array = array;
}
Stack.prototype.output = () => {
    console.log(this.array);
};

let stack1 = new Stack([1, 2, 3]);
stack1.output();

console.log("Name is")