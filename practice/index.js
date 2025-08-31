// console.log(0 == false); //true

// console.log(null == undefined); // true

// console.log("10" < 2);  // False ,  convert string to no hence 
// let a = 5;
// let b = "5";
// console.log(a === b); // false


// let x = 10;
// console.log(x >= 10);

// console.log(true || false && false); // true

// let a = 0;
// let b = "Hello";
// console.log(a || b)  // true , kyoki truthy value bhi leta h logicall operator me 


// let user = null;
// let name = "Guest";
// console.log(user && name); // false

// console.log(!"");

// console.log(1 && 0 && 2);
// console.log("Cat" && 0 );

// console.log(5 & 3);   ye chod diya bitwise wala    



// let result = 10  - "5";
// console.log(result);

// let a = 10;
// // a++;
// console.log(a);  a++ is already executed  ans - 11

// let a = 10;
// console.log(a ++); direct print ans  10

// let b = 3;
// console.log(b ** 2);  // 9

// let x = 10;
// x += 5;
// console.log(x);

// let a = 7;
// let b = 3;
// console.log(a % b); // 1

// let x = 2;
// x = x * x * x;
// console.log(x); 8

// let value = "10" * "2";
// console.log(value);   //20

// let n = 5;
// console.log(n++ + ++n);  //12

// let a = 4;
// let b = 2;
// console.log(a ** b); //16

// let m = 15;
// let n = 4;
// let o = 2;
// console.log(m / n * o);  // 7.5

// let output = 3 + 2 * 4;
// console.log(output);
// console.log("5" - 2 + 3);

// let age = 17;
// console.log(age >= 18);

// let p = 10;
// let q = 20;
// console.log(p > 5 && q < 15); // false

// let num = 8;
// console.log(num > 0 && num % 2 === 0) // true

// console.log(typeof null);

// let obj = { name: "John", age: 25 };
// delete obj.age;
// console.log(obj);

// console.log(5 > 3 ? "Yes" : "No");

// console.log(typeof []); /// object

// let arr = [];
// console.log(arr instanceof Array);


//nested loop
// for(let i=1;i<=4;i++){
//     for(let j=1;j<=4;j++){
//         console.log("5")
//     }
//     console.log("\n")
// }

//pattern question

// for(let i=1;i<=4;i++){
//     let str = ""
//     for(let j=1;j<=4;j++){
//         str += "5";
//     }
//     console.log(str)
// }


// for(let i=1; i<=5;i++){
//     let ans = "";
//     for(j=1;j<=i;j++){
//         ans += "*"
//     }
//     console.log(ans)
// }

// for(i=1; i<=5;i++){
//     let ans= "";
//     for(let j=1; j<= 5-i+1;j++){
//         ans += "+";
//     }
//     console.log(ans)
// }



// for(i=1; i<=5;i++){
//     let ans= "";
//     for(let j=1; j<= 5-i+1;j++){
//         ans += j;
//     }
//     console.log(ans)
// }

// for(i=1; i<=5;i++){
//     let ans= "";








//     for(let j=5; j>=i;j--){
//         ans += j;
//     }
//     console.log(ans)
// }

// for(i=0; i<5;i++){
//     let space = " ";
//     for(let space1=0 ; space1<i; space1++){
//         space += " "
//     }
//     let ans= "";
//     for(let j=0; j<5-i;j++){
//         ans = ans + ( 5 - i -j) ;
//     }
//     console.log(space + ans ) 
// }

//piramid pattern 
// for(i=1; i<=4;i++){

//     let space = ""
//     for(let space1=1 ; space1< 5-i ; space1++){
//         space += " "
//     }
//     let ans= "";
//     for(let j=1; j<= 2*i - 1 ;j++){
//         ans = ans + "*";
//     }
//     console.log(space + ans ) 
// }


//parabola
// for(i=1; i<=4;i++){

//     let space = ""
 
//     let ans= "";
//     for(let j=1; j<= 4 ;j++){
//         if( (i==1) || j==1 || j==4 || i==4){
//             ans = ans + "*";
//         }
//         else {
//             ans = ans + " "
//         }
//     }
//     console.log(space + ans ) 
// }




                //reverse string

// let arr =  "rohan"
// let arrReverse = arr.split("").reverse().join("");
// console.log(arrReverse);



// clouser

// function outer(){
//     let num = 0;
//     return function inner(){
//         console.log(num)
//         num++
//     }
// }

// let counter = outer()
// counter()
// counter()
// counter()
// counter()
// counter()


//curring 

// function curringNum(x){
//     return function(y){
//         return function (z){
//             return x+y+z;
//         }
//     }
// }

// let printNum = curringNum( (1) , (2), (3))
// console.log(printNum)

//promise 

// let promise = new Promise ( (resolve , reject)=>{
//     let age = Math.floor(Math.random(0,10)* 100)
//     if(age >=18){
//         setTimeout(()=>{
//             resolve ( " you are allowed to vote")
//         },3000)
        
//     }
//     else{
//         console.log("niklodiean")
//     }
// })

// promise.then((op)=> console.log(op)).catch((e)=>console.log(e))
// console.log(promise)

// const promise = new Promise((resolve, reject) => {

  
//   let age = Math.floor(Math.random() * 100); 
//    setTimeout(()=> {console.log("Promise Proceed")

// if (age >= 18) {
//     resolve("You are allowed to Vote");
//   } else {
//     reject("You are not eligible to vote");
//   }

//    },2000)
  
// });
// let op=promise.then((op) => console.log(op)).catch((e) => console.log(e));
// console.log(op);

















// const promise = new Promise((resolve, reject) => {

  //   let age = Math.floor(Math.random() * 100); 
   
  // if (age >= 18) {
//     resolve("You are allowed to Vote");
//   } else {
//     reject("You are not eligible to vote");
//   }

// });
// let op=promise.then((op) => console.log(op)).catch((e) => console.log(e));
// setTimeout(()=> {console.log(op);
//  },2000)