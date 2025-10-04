// dialog box 
// alert("hello") // syncronos 
//  let isconfirm  = confirm("are to ready")
//  let isPrompt = prompt("enter your name")
// document.write(isPrompt)

// String Interpolation temperalte literle
// let name = "rohan yadav";
// let age =  24;
// console.log(`My name is ${name} and age is ${age}`)

//String Methods
// let fullname = "Rohan Yadav"
// let greet = "                    good        morning "
// let x = "avengers"

//substrings
// console.log(fullname.substring(1,3)) //oh

// console.log(x.concat(fullname))// avengersRohan Yadav

// console.log(greet.trim()) //remove space from starting and ending
//  console.log(x.slice(5)) //return a part of the original string as new string 

// console.log(x.split(""))  convert to array
// console.log(x.replace("e","r")) replace krta h 1st value jo mile
// console.log(x.replaceAll("e","r")) sare value ko replace

// console.log(fullname.includes("Rohan")) value present h ki 


//find lenght 
// console.log(fullname.length) //lenght of words 11

//toUpperCase us as function
// console.log(fullname.toUpperCase())

//tolowercase 
// console.log(fullname.toLowerCase())



//array method
// let arr = [11 , 55 , 22 , 44 , 77 ,66 ,100];
// let arr1 = [ "java" , "python" , "js" , "MERN"]

//joint 
// console.log(arr1.join(" "))

//mutating - changes in original array 
// arr.push(45) // 45 added from last
// arr.pop()   //45 deleted from last
// arr.shift() // value deleted from start
// arr.unshift(25) // value added  from start
// console.log(arr)
// console.log(arr.slice(1,3)) //55 , 22copy part of array
//  console.log(arr1.splice(1,2))
// console.log(arr1)
// console.log(arr1.sort())
// console.log(arr.sort())



// map and filter method
// let num = [ 1,2,3,4,5];
// let double = num.map( (a)=> a*2);
// console.log(double);

// let num1 = [54,4,457,7,58,58,7,4,65,23,8,4,79]

// let useFilter = num1.filter( (a)=> a < 10)
// console.log(useFilter)


//spread operator ...
// console.log(Math.min(...num)) //11
// let n = [1, 2, 3];
// let n1= [4, 5, 6];

// let merged = [...n, ...n1];
// console.log(merged); // [1, 2, 3, 4, 5, 6]

//shallow copy and deep copy

// let originalObject = {
//     name : "rohan",
//     address : {id:101,
//         Location : {
//             currentLocation : "indore",
//             permaLocation : "UP"
//         }
//     },
// }

// console.log(originalObject)
// originalObject.name = "chikku"


// //shallowcopy 
// let shallowcopy = Object.assign( {} , originalObject);
// let deepCopy = {...originalObject}
// console.log(shallowcopy.address.Location.currentLocation)



//deep copy  //isme nested wale me changes hote h 
// let deepCopy = JSON.parse(JSON.stringify(originalObject));
// let deepCopy={...originalObject}

// let deepCopy=structuredClone(originalObject)

// deepCopy.address.id="chikku"
// deepCopy.name="mohan"
// console.log(originalObject)
// console.log(deepCopy)

// console.log(deepCopy.name)








//freeze and seal method 
// let obj = {
//     fname : "rohan",
//     age : 24,
//     data : {
//         city : "indore"
//     }
// }

// console.log(`original object `, obj)
// Object.freeze(obj)
// obj.fname = "chinnu"
// console.log(objx)

// const { fname , age } = obj ;
// console.log(fname )


// This keyword
// by default window
// console.log(this)

// //in function
// function isthis(){
//     console.log(this)
// }
// isthis()

// //3rd case
// new isthis() //empty object 


// //object 
// let obj1 = {
//     name : "rohan",
//     age : 24,
//     info  :  function() {
//         console.log(this)
//     }
// }
// obj1.info()  // refer object 

// //arraow function
// let arrowFun = ()=> {
//     console.log(this)
// }
// arrowFun()     //windpow



// let fname = [ "virat" , "dhoni" , "rohit", "KL" , "pujara"];

// // let capital  = fname.map( (w)=>  w.charAt(0).toUpperCase() + w.slice(1))
// // console.log(capital)
// console.log(fname.splice(1))

// let num = [ 1,2,3,4,5];
// let num1 = num



// reverse
// let user = "rohan";
// let reverseUser = user.split("").reverse().join("")
// console.log(reverseUser)

// let arr = [ 2 ,5, 4 , 9,]

// let mapUse = arr.map( (e)=> e *e)
// console.log(mapUse)

// function demo(a, b, c) {
//   console.log(arguments);   // { '0': 1, '1': 2, '2': 3, length: 3 }
// }

// demo(1, 2, 3);



//array like object 
// function obj(...rest){
//     console.log(arguments)
//     console.log(arguments[1])
// }

// obj(2,5,7,8)


// let obj1 = {
//     fname : "rohan",
//     age : 24,
//     address : { current : "idar",
//         perma : "udar"
//     }

// }

// let shallowcopy = Object.assign( {},  obj1);
// shallowcopy.address.current = "indore"
// obj1.fname = "name_change"

// console.log(shallowcopy)
// console.log(obj1)


// console.log("start ");
// setTimeout(()=>{
//     console.log("setTime");
// },0);
// console.log("end");

// console.log(y);
// console.log(typeof(y));


// console.log([1,2,3]===[1,2,3]);
// console.log({ name: "a" } == { name: "a" })  //false

// console.log(name);
// var name = "John";

    // function demo(){
    //   console.log("hey");//hey print
    // }
    // const ans=demo();
    // console.log(ans);
    // function demo1(){
    //   return "hey";
    // }
    // const ans1=demo1();
    // console.log(ans1);


// console.log(a);
// console.log(b);
// var a=b=5;

console.log("hey");
{
  let a = 1;
  let b = 2;
  console.log(a);
  console.log(b);
}
console.log(a);
console.log(b)