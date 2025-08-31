// // Pattern 1 (Right-Angled Triangle)
// //  *
// //  **
// //  ***
// //  ****
// //  *****
// // for(let i = 1; i<=5;i++){
// //     let ans = "";
// //     for(let j = 1 ; j<=i; j++){
// //         ans = ans + "*"
// //     }
// //     console.log(ans)
// // }

// // Pattern 2 (Inverted Right-Angled Triangle)
// //  *****
// //  ****
// //  ***
// //  **
// //  *
 
// //  for ( let i = 5 ; i >= 1; i--){
// //     let ans = ""
// //     for(let j=1; j<=i;j++){
// //         ans += '*'
// //     }
// //     console.log(ans)
// // }

// Pattern 3 (Left-Aligned Pyramid)
//      *
//     **
//    ***
//   ****
//  *****
// for(let i = 1; i<=4; i++){
//     let space  = ""
  
//     for(let sp= 4; sp>=i;sp-- ){
//         space = space + " "
//     }
//       let ans = ""
//     for(let j= 1 ;j<=i;j++){
//         ans = ans + '*'
//     } 
//     console.log( space + ans )
// }

 
// Pattern 4 (Inverted Left-Aligned Pyramid)
//  *****
//   ****
//    ***
//     **
//      *
// for(let i = 5 ; i>= 1;i--){
//     let space = "";
//     for(let sp= 1 ; sp<=5 - i + 1; sp++){
//         space = space + " "
//     }
//     let ans = "";
//     for(let j=1 ; j<= i;j++ ){
//         ans = ans +  '*'
//     }
//     console.log( space + ans)
// }
 
// Pattern 5 (Full Pyramid)
//      *
//     ***
//    *****
//   *******
//  *********
// for(let i = 1 ; i<= 5 ; i++){
//     let ans = "";
//     let space  = "";
//     for(let sp=5; sp>=i;sp--){
//         space = space + " ";
//     }
//     for(let j= 1; j<=i*2 - 1 ; j++ ){
//         ans = ans + "*"
//     }
//     console.log(space + ans)
// } 
 
// Pattern 6 (Inverted Full Pyramid)
//  *********
//   *******
//    *****
//     ***
//      *
// for(let i=5 ; i>=1;i--){
//     let space = "";
//     let ans = ""
//     for(let sp = 5; sp>=i; sp--){
//         space = space + "+"
//     }
//     for(let j = 1; j<=i*2-1 ;j++){
//         ans = ans + "*"
//     }
 
// Pattern 7 (Diamond)
//      *
//     ***
//    *****
//   *******
//  *********
//   *******
//    *****
//     ***
//      *
// function diamondWithNum(){  
// for(let i = 1 ; i<= 5 ; i++){
//     let ans = "";
//     let space  = "";
//     for(let sp=5; sp>=i;sp--){
//         space = space + " ";
//     }
//     for(let j= 1; j<=i*2 - 1 ; j++ ){
//         ans = ans + "*"
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
//         ans = ans + "*"
//     }
//     console.log( space + ans)
// }
// }
// diamondWithNum()
 
// Pattern 8 (Hourglass)
//  *********
//   *******
//    *****
//     ***
//      *
//     ***
//    *****
//   *******
//  *********
// function Hourglass(){
// for(let i=5 ; i>=2;i--){
//     let space = "";
//     let ans = ""
//     for(let sp = 5; sp>=i; sp--){
//         space = space + " "
//     }
//     for(let j = 1; j<=i*2-1 ;j++){
//         ans = ans + "*"
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
//         ans = ans + "*"
//     }
//     console.log(space + ans)
// }

// }
// Hourglass()
 
// Pattern 9 (Hollow Square)
//  *****
//  * *
//  * *
//  * *
//  *****
// for(i=1; i<=5;i++){

//     let space = ""
 
//     let ans= "";
//     for(let j=1; j<= 5 ;j++){
//         if( (i==1) || j==1 || j==4 || i==4){
//             ans = ans + "*";
//         }
//         else {
//             ans = ans + " "
//         }
//     }
        
//     console.log(space + ans ) 
// }

 
// Pattern 10 (Hollow Pyramid)
//  *
//  * *
//  * *
//  * *
//  *********
// for(let i = 1; i<=7;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=7 ; j++){
//         if( i + j == 5 || j - i== 3 || i == 4){
//             ans = ans + "*";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }  

// Pattern 11 (Hollow Inverted Pyramid)
//  *********
//  * *
//  * *
//  * *
//   *

// Pattern 12 (Increasing Stars)
//  *
//  **
//  ***
//  ****
//  *****
// for(let i= 1; i<=5 ; i++){
//     let ans = ""
//     for(let j = 1 ; j<= i ; j++){
//         ans = ans + "*"
//     }
//     console.log(ans)
// }
 
// Pattern 13 (Decreasing Stars)
//  *****
//  ****
//  ***
//  **
//  *
// for(let i= 1; i<=5 ; i++){
//     let ans = ""
//     for(let j = 1 ; j<= 5 - i +1; j++){
//         ans = ans + "*"
//     }
//     console.log(ans)
// }

 
// Pattern 14 (Right-Aligned Pyramid)
//      *
//     **
//    ***
//   ****
//  *****
// for(let i= 1 ; i<=5;i++){
//     let space = "";
//     let ans = ""
//     for(let sp=5; sp>=i;sp--){
//         space = space + " "
//     }
//     for(let j=1 ; j<=i; j++){
//         ans = ans + "*"
//     }
//     console.log(space + ans)
// }

 
// Pattern 15 (Inverted Right-Aligned Pyramid)
//  *****
//   ****
//    ***
//     **
//      *
// for(let i= 5 ; i>=1;i--){
//     let space = "";
//     let ans = ""
//     for(let sp=1; sp<=5 -i +1;sp++){
//         space = space + "+"
//     }
//     for(let j=1 ; j<=i; j++){
//         ans = ans + "*"
//     }
//     console.log(space + ans)
// }
 
// Pattern 16 (Diamond with Solid Center)
//  *
//  **
//  ***
//  ****
//  *****
//  ****
//  ***
//  **
//  *
// function Pattern16(){
//     let ans = ""
//     for(let i =1; i<=5;i++){
//         let ans = "";
//         for(j=1;j<=i;j++){
//             ans = ans + *
//         }
//         console.log(ans)
//     }
//     for(let i=4; i>=1; i--){
//         let ans = "";
//         for(j=1; j<=i;j++){
//             ans = ans + "*"
//         }
//         console.log(ans)
//     }
// }
// Pattern16();
 
// Pattern 17 (Hollow Diamond)
//  *
//  * *
//  * *
//  * *
//  * *
//  * *
//  *
// for(let i = 1; i<=7;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=7 ; j++){
//         if( i + j == 5 || j - i == 3 || i - j ==3 || i+ j == 11 ){
//             ans = ans + "*";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }
 
// Pattern 18 (Cross)
//    *    *
//     * *
//      *
//     * *
//   *     *
// for(let i = 1; i<=5;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=5 ; j++){
//         if( i - j ==0 || i+j ==6 ){
//             ans = ans + "*";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }
 
// Pattern 19 (Plus)
//  * *
//  * *
//  * *
//  * *
//  * *
 
// Pattern 20 (X)
//  * *
//  * *
//  *
//  * *
//  * *
 
// Pattern 21 (Right-Angled Inverted Triangle with Hollow)
//  *****
//  * *
//  * *
//  *
 
// Pattern 22 (Hollow Plus)
//  * *
//  * *
//  *****
//  * *
//  * *
// for(let i = 1; i<=5;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=5 ; j++){
//         if( i ==3 || j ==2 || j==4  ) {
//             ans = ans + "*";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }
 
// Pattern 23 (Vertical Diamond)
//  * 
//  * *
//  * *
//  * *
//  * *
//  * *
//  *
 
// Pattern 24 (Z)
//  *****
//     *
//    *
//  *
//  *****
// for(let i = 1; i<=5;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=5 ; j++){
//         if( i  || i+j ==6 ){
//             ans = ans + "1";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }
 
// Pattern 25 (Checkerboard Pattern)
//  * * * *
//  * * * *
//  * * * *
//  * * * *