function Queue(array){
    this.array=array;
    this.add=function(element){
        this.array.push(element);
    }
    this.remove=function(){
        this.array.shift();
    }
}




let queue1=new Queue([1,2,3]);
queue1.add(4);
queue1.remove();
console.log(queue1);

