function Queue(array){
    this.array=array;
    this.add=function(element){
        this.array.push(element);
    }
}




let queue1=new Queue([1,2,3]);
queue1.add(4);
console.log(queue1);

