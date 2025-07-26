//1.even or odd
// let val= +prompt("Enter the number");
// if(val%2 === 0)
// {
//     console.log("Even number");
// }else{
//     console.log("Odd number");
// }



//2.largest among three numbers
// let a=+prompt("Enter first number");
// let b=+prompt("Enter second  number");
// let c=+prompt("Enter third number");
// if(a>=b){
//     if(a>=c){
//         console.log("a is the largest of all");
//     }
//     else{
//         console.log("c is the largest of all")
//     }
// }
// else if(b>=c){
//     console.log("b is the largest of all");
// }
// else{
//     console.log("c is the largest of all");
// }



//3.leap year or not
// let year=+prompt("Enter the year");
// if(year % 4 === 0){
//     if(year%100 === 0){
//         if(year%400 === 0){
//             console.log("It is a leap year!!!");
//         }else{
//             console.log("It is not a leap year!");
//         }
//     }
//     else{
//         console.log("It is a leap year!!!");
//     }
// }
// else{
//     console.log("It is not a leap year!");
// }



//4.Grade calculator using percentage 95-a+,95-85-a,85-75-b+,75-65-b,65-55-c+,55-45-c,45-35-d,<35-f
// let res=+prompt("Enter your percentage (0-100)");
// if(res<0 || res>100){
//     console.log("Enter valid percentage!!");
// }
// else{
//     if(res>=95){
//         console.log("Grade A+");
//     }
//     else if(res>=85 && res<95){
//         console.log("Grade A");
//     }
//     else if(res>=75 && res<85){
//         console.log("Grade B+");
//     }
//     else if(res>=65 && res<75){
//         console.log("Grade B");
//     }
//     else if(res>=55 && res<65){
//         console.log("Grade C+");
//     }
//     else if(res>=45 && res<55){
//         console.log("Grade C");
//     }
//     else if(res>=35 && res<45){
//         console.log("Grade D");
//     }
//     else{
//         console.log("Fail!!!");
//     }
// }



//5. vowel or consonant
// let val=prompt("Enter the letter");
// if((val.charCodeAt(0)>=65 && val.charCodeAt(0)<=90) || (val.charCodeAt(0)>=97 && val.charCodeAt(0)<=122)){
//     if(val==="a" || val==="e" || val==="i" || val==="o" || val==="u" || val==="A" || val==="E" || val==="I" || val==="O" || val==="U"){
//         console.log("It is a vowel!!!");
//     }
//     else{
//         console.log("It is a consonant!!!");
//     }
// }
// else{
//     console.log("Enter valid input!");
// }



//6.positive,negative,zero
// let num=+prompt("Enter the number");
// if(num<0){
//     console.log("Negative");
// }
// else if(num>0){
//     console.log("Positive");
// }
// else{
//     console.log("Zero");
// }



//7. divisible by 3 and 5
// let num=+prompt("Enter the number");
// if(num%3==0 && num%5==0){
//     console.log("It is divisible by 3 and 5");
// }else{
//     console.log("It is not divisible by 3 and 5");
// }

//8.eligible to vote or not using ternary operator
// let age= +prompt("Enter the age");
// age>=18?console.log("Eligible to vote"):console.log("Not eligible to vote");



//9.equilateral or isosceles or scalenee
// let a=+prompt("Enter side 1 of traingle");
// let b=+prompt("Enter side 2 of traingle");
// let c=+prompt("Enter side 3 of traingle");
// if(a===b && a===c){
//     console.log("Equilateral traingle");
// }
// else if(a===b || b===c || c===a ){
//     console.log("Isosceles traingle");
// }
// else{
//     console.log("Scalene traingle");
// }



//10.string starting with a capital letter
let str=prompt("Enter the string");
let val=str[0].charCodeAt(0);
if(val>=65 && val<=90){
    console.log("String starts with capital letter!!!");
}
else{
    console.log("String doesn't start with a capital letter!");
}