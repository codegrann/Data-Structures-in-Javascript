function Queue(array){
    this.array=array;
    this.add=function(element){
        this.array.push(element);
    }
    this.remove=function(){
        this.array.shift();
    }
}
Queue.prototype.accessNthElement = function (n) {
    while(--n != 0){
    this.array.shift();
    }
    return this.array.shift();
}





let queue1=new Queue([1,2,3]);
queue1.add(4);
queue1.remove();
console.log(queue1);
console.log(queue1.accessNthElement(3));

