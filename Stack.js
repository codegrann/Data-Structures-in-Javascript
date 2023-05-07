// Initialise a constructor function
function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}

Stack.prototype.state = function () {
    console.log(this.array);
}

Stack.prototype.isEmpty = function () {
    console.log(this.array.length == 0);
};
Stack.prototype.add = function (element) {
    this.array.push(element);
}




let stack1 = new Stack([1, 2, 3]);
// let stack2=new Stack()
// stack2.isEmpty()
stack1.isEmpty();
stack1.add(4);
console.log(stack1)

