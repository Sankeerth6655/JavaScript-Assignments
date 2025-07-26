//var,let,const
//let and const are introduced in ES6 version in 2015
//var num; //by using var the variable "num" will be shown as already declared variable known as hoisting.
// console.log(num);//undefined
// const num=10;//hoisting
// console.log(num);//10
// num=20;
// console.log(num);//10


// console.log(1 == true);


//traffic lights
// let light= prompt("Enter traffic color");
// if(light === "red"){
//     console.log("Stop");
// }
// if(light === "yellow"){
//     console.log("Slow");
// }


// for(i=1;i<=5;i++){
//     console.log(i);
// }

let str="Edupoly  h";
let size=0;
// for(i=0;i<7;i++){
//     console.log(str[i]);
// }
for(val of str){
    console.log(val);
    size++;
}
console.log(size);