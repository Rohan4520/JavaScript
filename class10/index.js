// function greet(t,d){
//     console.log("x,y" ,t,d  )
//     return x+y
// }
// let x= greet(10,20)
// console.log(x)

// function add(a, b) {
//     return a + b;
// }
// let result = add(5);
// console.log(result);  //NAN aayga kyoki  5 +b plus krke koi proper no ni milta

// function test(a, b = 10) {
//     return a * b;
// }
// console.log(test(5));  //50
// console.log(test(5, 2));  //10


// // ----
// function checkScope() {
//     var a = 10;
//     if (true) {
//         let a = 20;
//         console.log(a);
//     }
//     console.log(a);
// }
// checkScope();

//----
// function greet(name) {
//     return "Hello " + name;
// }
// let greet = "Hi";                        is already declared
// console.log(greet("Rohan"));

//-
// function calc(a, b) {
//     return ;
//     //  
// }
// console.log(calc(5, 10));  // undefined
 
// let fun = function(a, b) {
//     return a - b;
// }
// console.log(fun(10, 5));
// console.log(fun);

// function outer() {
//     function inner() {
//         return "Inner Function";
//     }
//     return inner;
// }
// console.log(outer()());

// console.log(myFunc());
// function myFunc() {
//     return "Hoisting Example";
// }                 //hoisting example

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(2, "3"));          //23

// function test(x) {
//     if(x) {
//         return "Truthy";
//     } else {
//         return "Falsy";
//     }
// }
// console.log(test(0));
// console.log(test(" "));
// console.log(test(null));


// function change() {
//     x = 10;
// }
// change();
// console.log(x);

// function demo(a, b) {
//     return a ?? b;
// }
// console.log(demo(null, 10));
// console.log(demo(0, 20));

// function tricky(a, b) {
//     console.log(a, b);
// }
// tricky(1);

//if else 
//  let num =  -5;
// if(num>0 ){
//     console.log("positive number");
//     if (num<0){
//         console.log("negative number");
//     }
// }
// else{
//     console.log("zero")
// }

//high order function
//yha function pr paranthesis likhna pdega
// function fullname( name , age ){
//     console.log( `my name is  ${name()} and age is ${age}`) 
// }

// function fname(){
    
//     return "rohan";
// }

// fullname(fname,24);


// function processNumbers(a, b, fn1, fn2, fn3) {
//     let step1 = fn1(a, b);
//     let step2 = fn2(step1);
//     let step3 = fn3(step2);
//     return step3;
// }

// Callback functions
// function add(x, y) {
//     return x + y;
// }
// function square(n) {
//     return n * n;
// }
// function half(n) {
//     return n / 2;
// }

// HOF call
// processNumbers(2, 3, add, square, half)
// let result = step3
// console.log(step3)
// Step1: add(2,3) = 5
// Step2: square(5) = 25
// Step3: half(25) = 12.5

//arrow function hoisting

// let greet = ()=>{
//     console.log("good morning")
// }
// greet();

// function add(a, b) {
//     console.log("Sum is", a + b);
// }
// let x = add(5, 10);
// console.log(x);

// function test() {
//     return;
//     console.log("This will run?");
// }
// test();
// function sayHello(name) {
//     return "Hello " + name;
// }
// let result = sayHello("Rohan");
// console.log(result);

// function greet(name) {
//     return "Hello " + name;
// }
// console.log(greet);


// function heloo(){

//     let x = ()=> {console.log("good morning")}
//     return x;

// }
// heloo()





