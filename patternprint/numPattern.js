// pattern print 
// ****
// ****
// ****
// ****
// for(let i = 1; i <=4; i++){
//     let ans = " ";
//     for(let j=1; j<=4; j++){
//         ans += "+"
//     }
//     console.log(ans)
// }

// 11111
// 22222
// 33333
// 44444
// 55555
// for (let i = 1 ; i <= 5 ; i++){
//     let ans = ""
//     for(let j = 1 ; j<= 5; j++){
//         ans = ans + i
//     }
//     console.log(ans)
// }


// Pattern 1 (Right-Angled Triangle with Numbers)
//  1
//  22
//  333
//  4444
//  55555
// for(let i = 1; i<=5;i++){
//     let ans = "";
//     for(let j = 1 ; j<=i; j++){
//         ans = ans + i
//     }
//     console.log(ans)
// }

// Pattern 2 (Inverted Right-Angled Triangle with Numbers)
//  55555
//  4444
//  333
//  22
//  1

// for ( let i = 5 ; i >= 1; i--){
//     let ans = ""
//     for(let j=1; j<=i;j++){
//         ans += i
//     }
//     console.log(ans)
// }

// Pattern 3 (Left-Aligned Pyramid with Numbers)
//     1
//    22
//   333
//  4444

// for(let i = 1; i<=4; i++){
//     let space  = ""
  
//     for(let sp= 4; sp>=i;sp-- ){
//         space = space + " "
//     }
//       let ans = ""
//     for(let j= 1 ;j<=i;j++){
//         ans = ans + i
//     } 
//     console.log( space + ans )
// }

// Pattern 4 (Inverted Left-Aligned Pyramid with Numbers)
//  55555
//   4444
//    333
//     22
//      1

// for(let i = 5 ; i>= 1;i--){
//     let space = "";
//     for(let sp= 1 ; sp<=5 - i + 1; sp++){
//         space = space + "+"
//     }
//     let ans = "";
//     for(let j=1 ; j<= i;j++ ){
//         ans = ans +  i
//     }
//     console.log( space + ans)
// }


// Pattern 5 (Full Pyramid with Numbers)
//     1
//    222
//   33333
//  4444444
// 555555555

// for(let i = 1 ; i<= 5 ; i++){
//     let ans = "";
//     let space  = "";
//     for(let sp=5; sp>=i;sp--){
//         space = space + " ";
//     }
//     for(let j= 1; j<=i*2 - 1 ; j++ ){
//         ans = ans + i 
//     }
//     console.log(space + ans)
// } 


// Pattern 6 (Inverted Full Pyramid with Numbers)
// 555555555
//  4444444
//   33333
//    222
//     1

// for(let i=5 ; i>=1;i--){
//     let space = "";
//     let ans = ""
//     for(let sp = 5; sp>=i; sp--){
//         space = space + "+"
//     }
//     for(let j = 1; j<=i*2-1 ;j++){
//         ans = ans + i
//     }

//     console.log( space + ans)
// }

// Pattern 7 (Diamond with Numbers)
//     1
//    222
//   33333
//  4444444
// 555555555
//  4444444
//   33333
//    222
//     1 

// function diamondWithNum(){  
// for(let i = 1 ; i<= 5 ; i++){
//     let ans = "";
//     let space  = "";
//     for(let sp=5; sp>=i;sp--){
//         space = space + " ";
//     }
//     for(let j= 1; j<=i*2 - 1 ; j++ ){
//         ans = ans + i 
//     }
//     console.log(space + ans)
// }
// for(let i=4 ; i>=1;i--){
//     let space = "";
//     let ans = ""
//     for(let sp = 5; sp>=i; sp--){
//         space = space + " "
//     }
//     for(let j = 1; j<=i*2-1 ;j++){
//         ans = ans + i
//     }
//     console.log( space + ans)
// }
// }
// diamondWithNum()

// Pattern 8 (Hourglass with Numbers)
//  555555555
//   4444444
//    33333
//    222
//     1
//    222
//   33333
//   4444444
//  555555555

// function Hourglass(){
// for(let i=5 ; i>=2;i--){
//     let space = "";
//     let ans = ""
//     for(let sp = 5; sp>=i; sp--){
//         space = space + " "
//     }
//     for(let j = 1; j<=i*2-1 ;j++){
//         ans = ans + i
//     }
//      console.log( space + ans)
// }        
// for(let i = 1 ; i<= 5 ; i++){
//     let ans = "";
//     let space  = "";
//     for(let sp=5; sp>=i;sp--){
//         space = space + " ";
//     }
//     for(let j= 1; j<=i*2 - 1 ; j++ ){
//         ans = ans + i 
//     }
//     console.log(space + ans)
// }

// }
// Hourglass()

// Pattern 10 (Hollow Pyramid with Numbers)
//    1
//   1 1
//  1  1
//  1 1
//  1111111
// for(let i = 1; i<=7;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=7 ; j++){
//         if( i + j == 5 || j - i== 3 || i == 4){
//             ans = ans + "1";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }    

// Pattern 11 (Hollow Inverted Pyramid with Numbers)
//  1111111
//   1   1
//   1  1
//   1 1
//    1
// for(let i = 5; i>=1;i--){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=7 ; j++){
//         if(  i == 5 || j - i == 1  ){
//             ans = ans + "1";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }  


// Pattern 12 (Increasing Numbers with Characters)
//  1
//  12
//  123
//  1234
//  12345

// for(let i= 1; i<=5 ; i++){
//     let ans = ""
//     for(let j = 1 ; j<= i ; j++){
//         ans = ans + j
//     }
//     console.log(ans)
// }

// Pattern 13 (Decreasing Numbers with Characters)
//  12345
//  1234
//  123
//  12
//  1

// for(let i= 1; i<=5 ; i++){
//     let ans = ""
//     for(let j = 1 ; j<= 5 - i +1; j++){
//         ans = ans + j
//     }
//     console.log(ans)
// }

// Pattern 14 (Right-Aligned Pyramid with Numbers)
//      1
//     22
//    333
//   4444
//  55555

// for(let i= 1 ; i<=5;i++){
//     let space = "";
//     let ans = ""
//     for(let sp=5; sp>=i;sp--){
//         space = space + "+"
//     }
//     for(let j=1 ; j<=i; j++){
//         ans = ans + i
//     }
//     console.log(space + ans)
// }

// Pattern 15 (Inverted Right-Aligned Pyramid with Numbers)
//  55555
//   4444
//    333
//     22
//      1

// for(let i= 5 ; i>=1;i--){
//     let space = "";
//     let ans = ""
//     for(let sp=1; sp<=5 -i +1;sp++){
//         space = space + "+"
//     }
//     for(let j=1 ; j<=i; j++){
//         ans = ans + i
//     }
//     console.log(space + ans)
// }


// Pattern 16 (Diamond with Solid Center using Numbers)
//  1
//  22
//  333
//  4444
//  55555
//  4444
//  333
//  22
//  1

// function Pattern16(){
//     let ans = ""
//     for(let i =1; i<=5;i++){
//         let ans = "";
//         for(j=1;j<=i;j++){
//             ans = ans + i
//         }
//         console.log(ans)
//     }
//     for(let i=4; i>=1; i--){
//         let ans = "";
//         for(j=1; j<=i;j++){
//             ans = ans + i
//         }
//         console.log(ans)
//     }
// }
// Pattern16();

// Pattern 17 (Hollow Diamond using Numbers)
//         1
//      1     1
//    1        1
//  1            1
//    1        1
//       1   1
//         1
// for(let i = 1; i<=7;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=7 ; j++){
//         if( i + j == 5 || j - i == 3 || i - j ==3 || i+ j == 11 ){
//             ans = ans + "1";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }



// Pattern 18 (Cross with Numbers)
//  1   1
//   1 1
//    1
//   1 1
//  1   1

// for(let i = 1; i<=5;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=5 ; j++){
//         if( i - j ==0 || i+j ==6 ){
//             ans = ans + "1";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }


// Pattern 19 (Plus with Numbers)
//  1 1
//  1 1
// 11111
//  1 1
//  1 1
// for(let i = 1; i<=5;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=5 ; j++){
//         if( i ==3 || j ==2 || j==4  ) {
//             ans = ans + "1";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }