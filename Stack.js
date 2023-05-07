// Initialise a constructor function
function Stack(array) {
    this.array=[];
    if(array) this.array = array;
}

Stack.prototype.state=function(){
    console.log(this.array);
}

Stack.prototype.isEmpty = function(){
    console.log(this.array.length==0);
};




let stack1 = new Stack([1, 2, 3]);
let stack2=new Stack()
stack1.state();
stack2.state();
stack1.isEmpty();
stack2.isEmpty()