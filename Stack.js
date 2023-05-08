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
Stack.prototype.remove=function(){
    this.array.pop();
}
Stack.prototype.accessNthElement=function(n){
    while(--n != 0){
        this.array.pop();
    }
    return this.array.pop();
}




let stack1 = new Stack([1, 2, 3]);
// let stack2=new Stack()
// stack2.isEmpty()
stack1.isEmpty();
stack1.add(4);
console.log(stack1)
stack1.remove();
console.log(stack1)
console.log(stack1.accessNthElement(3));

