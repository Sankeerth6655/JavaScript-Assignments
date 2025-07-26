//1.print even number from 1 to n
// let n= +prompt("Enter a number n");
// for(let i=1;i<=n;i++){
//     if(i%2===0){
//         console.log(i);
//     }else{
//         continue;
//     }
// }


//2.factorial of a number
// let n= +prompt("Enter a number");
// let res=1;
// for(let i=1;i<=n;i++){
//     res=res*i;
// }
// console.log(res);



//3.reverse a number
// let num= +prompt("Enter a number");
// let rev=0,rem;
// while(num!=0){
//     rem=num%10;
//     rev=rev*10 + rem;
//     num=Math.floor(num/10);
// }
// console.log(rev);



//4.palindrome number --1221/12321
// let num= prompt("Enter the number");
// let count=0;
// let n=num.length;

// for(i=0;i<Math.floor(n/2);i++){
//     if(num[i] === num[n-i-1]){
//         count++;
//     }else{
//         console.log("Not a palindrome");
//         break;
//     }
// }
// if(count===Math.floor(n/2)){
//     console.log("It is a palindrome");
// }



//5.sum of digits of a number
// let num = +prompt("Enter the number");
// let rem=0,res=0;
// while(num != 0){
//     rem=num%10;
//     res=res+rem;
//     num=Math.floor(num/10);
// }
// console.log(res);



//6.fibonacci series upto n terms
// let n = +prompt("Enter a number n");
// let a=0;
// let b=1;
// let curr;
// if(n<1){
//     console.log("Invalid input");
// }
// else{
//     for(i=0;i<n;i++){
//         if(n>2){
//             curr=a+b;
//             console.log(curr);
//             a=b;
//             b=curr;
//         }
//         else if(n===1){
//             console.log(0);
//         }
//         else if(n===2){
//             console.log(0);
//             console.log(1);
//         }
//     }
// }



//7.Multiplicaton table
// let num= +prompt("Enter a number");
// for(i=1;i<=10;i++){
//     console.log(num+" x "+i+" = ",(num*i));
// }



//8.find the number of digits in an integer
// let num= +prompt("Enter the number");
// let count=0;
// while(num!=0){
//     num=Math.floor(num/10);
//     count++;
// }
// console.log(count);



//9.calculate the sum of 1 to n number using different loops
//for
// let num= +prompt("Enter the number");
// let sum=0;
// for(i=1;i<=num;i++){
//     sum+=i;
// }
// console.log(sum);

//while
// let num= +prompt("Enter the number");
// let sum=0,i=1;
// while(i<=num){
//     sum+=i;
//     i++
// }
// console.log(sum)

//do while
// let num= +prompt("Enter the number");
// let sum=0,i=1;
// do{
//     sum+=i;
//     i++;
// }while(i<=num);
// console.log(sum);



//10. check if it is a prime number
// let num = +prompt("Enter the number");
// let count=0;
// for(i=1;i<=num;i++){
//     if(num%i==0){
//         count++;
//     }else{
//         continue;
//     }
// }
// if(count===2){
//     console.log("It is a prime number");
// }else{
//     console.log("It is not a prime number");
// }
