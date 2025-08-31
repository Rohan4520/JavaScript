// minimum between to number
// function findmin(num1 , num2){
//     if(num1<num2){
//         console.log(num1 , "is minimum")    
//     }
//     else if(num1 === num2){
//         console.log( `${num1} and ${num2} both are equal`)
//     }
//     else{
//         console.log(num2 ," is min")
//     }
// }
// findmin(7,5);

// minimum between to three number
// function findMin(n1,n2,n3){
//     if(n1<n2 && n1<n3){
//         console.log(`${n1} is minimum`)
//     }
//     else if(n2<n1 && n2<n3){
//         console.log(`${n2} is minimum`)
//     }
//     else{
//         console.log(`${n3} is minimum`)
//     }
// }
// findMin(87,34,144);

// even odd check
// function numCheck(num){
//     for(let i=1; i<=num ; i++){
//     if(i%2===0){
//         console.log(i ,"even")
//     }
//     else(
//         console.log(i , "odd")
//     )
// }
// }
// numCheck(50);

//Prime Number Checker
// let p =1
// function primeNum(num){
//     for(let i =2; i<num ;i++){
//         if(num%i ==0){
//             console.log("not prime number") 
//             break;
//         }
//         else {
//             console.log("prime number ")
//             break;
//         }
//     }
// }
// primeNum()

//perfect number
// function isPerfect(num){
//     let sum = 0;
//     for(let i=1; i<num; i++){
//         if(num % i === 0){
//             sum += i;
//         }
//     }
//     return sum === num;
// }
// console.log(isPerfect(4)); // true



// fabonacci no
// let a =0;
// let b=1;
// function Febonacci(n){
//     for(let i=0;i<=n;i++){
//         console.log(a);
//         let sum = a+b;
//         a=b;
//         b=sum
//     }

// }
// Febonacci(10);

// Factor
// function factors(num){
//     for(let i=1; i<=num; i++){
//         if(num % i === 0){
//             console.log(i);
//         }
//     }
// }
// factors(12);

// function factor(num){
//     for(let i =1; i<=num;i++){
//         if(num%i === 0){
//             console.log(i)
//         }
//     }

// }
// factor(15);

