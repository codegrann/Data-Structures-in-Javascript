// Initialise a constructor function
function Stack(array){
    this.array=array;
}
Stack.prototype.output=()=>{
    return (this.array);
}

let stack1=new Stack([1,2,3]);
stack1.output();