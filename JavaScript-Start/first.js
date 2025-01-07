// //Arithmatic operators

// let a = 5;
// let b = 2;

// console.log("a = ", a, "& b = ", b);
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a x b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);
// console.log("a ** b = ", a**b); //a to the power b =25

// //Unary operators
// console.log("a = ", a, "& b = ", b);

//  console.log("a = ",a);

//  console.log("a++ = ",a++);//a+1=5 post incerment

//  console.log("++a = ",++a);//1+a=7 pre increment
 
//  console.log("a-- = ", a--);//a-1=7 post increment

//  console.log("--a = ", --a);//--a=5 pre increment

//Asignment Operators
// let a = 5;
// let b = 2;

// // a += 4 is  a = a+4 
// console.log("a =",a+4);//9

// // a -=4; is  a = a - 4
// console.log("a =",a-4);//1

// // a*=4; is  a = a * 4
// console.log("a =",a*4);//20

// // a/=4 is a = a / 4
// console.log("a =",a/4);//1.24

// //a%=4 is a = a % 4
// console.log("a =",a % 4);//1

// // a**=4 is a = a**
// console.log("a =",a**4);//625

//Comparison operators
// let a = 5;
// let b = 6;
// console.log( "a>b", a > b );
// console.log( "a<b", a < b );
// console.log( "a>=b", a >= b );
// console.log( "a<=b", a <= b );

// Logical Operators
// // let a = 6;
// // let b = 5;
// let cond1 = a > b; //true
// let cond2 = a===5;//true
// console.log("cond1 && cond2 =", cond1 && cond2);
// console.log("cond1 && cond2 =", a > b && a===6);

//Logical || Or Operator
// let a = 6;
// let b = 5;
// let cond1 = a > b; //true
// let cond2 = a===5;
// console.log("cond1 || cond2 =", cond1 || cond2);

// // ! logical Not Operators
// let a = 6;
// let b = 5;

// console.log(" !(6<5) =", !(a===5)) // is ture 


//Conditional if else if else Statement 
// let age = 16;
// if (age<18){
//     console.log("junior")
// }else if (age>60){
//     console.log("Senior");
// }
// else {
//     console.log("middle");
// }



//  //Finding Even or odd with else if statement
//  let num = 9;

//  if (num%2 === 0){
//     console.log("Even")
    
//  }else{ 
//  console.log("odd");
// }

// // change mode
// let mode = "dark";
// let color;
// if( mode === "dark"){
//     color = "black";
// }else if( mode === "blue"){
//      color = "blue";
// } else if(mode === "pink"){
//     color = "pink";
// }else{
//     color = "white";
// }
//  console.log(color);
// //
// if (mode === "dark"){console.log(mode);}


//Ternary Operators
// let age = 25;
// let result = age > 18 ? "Adult" : "Not Adult";
// // you can also write by this way too
// age < 18 ? console.log("Adult") : console.log("Not Adult");
// console.log(result);

// user prompt
// // let num = prompt('enter a number');

// if (num %5 === 0){
//     console.log(num, "Can Multiply by 5");
// }else {
//     console.log(num, "Can not Multiply by 5 ");
// }

// Assign grade to student based on score

let score = prompt("enter your score");
let grade;

if (score >=90 && score <= 100){
 grade = "A";
}else if (score >=70 && score <=89){
    grade = "B";
}else if(score >=60 && score <= 69){
    grade = "C";
}else if(score >=50 && score <= 59){
    grade = "D";
}else if(score >=40 && score >=49){
    grade = "E";
}
console.log("Your Grade is = ", grade);