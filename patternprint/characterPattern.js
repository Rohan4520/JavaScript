// Pattern 1 (Right-Angled Triangle with Characters)
//  A
//  BB
//  CCC
//  DDDD
//  EEEEE
// for(let i = 65; i<=69;i++){
//     let ans = ""
//     for(j=65 ;j<=i;j++){
//         ans = ans + String.fromCharCode(i)
//     }
//     console.log(ans )
// }

// Pattern 2 (Inverted Right-Angled Triangle with Characters)
//  EEEEE
//  DDDD
//  CCC
//  BB
//  A
// for(let i = 69; i>=65;i--){
//     let ans = ""
//     for(j=65 ;j<=i;j++){
//         ans = ans + String.fromCharCode(i)
//     }
//     console.log(ans )
// }

// Pattern 3 (Left-Aligned Pyramid with Characters)
//     A
//    BB
//   CCC
//  DDDD
// EEEEE

// for(let i = 65; i<=69; i++){
//     let space  = ""  
//     for(let sp= 69; sp>=i;sp-- ){
//         space = space + " "
//     }
//       let ans = ""
//     for(let j= 65 ;j<=i;j++){
//         ans = ans + String.fromCharCode(i)
//     } 
//     console.log( space + ans )
// }

// Pattern 4 (Inverted Left-Aligned Pyramid with Characters)
//  EEEEE
//   DDDD
//    CCC
//     BB
//      A

// for(let i = 69;i>=65;i--){
//     let ans = ""
//     let space = "";
//     for(let sp = 65; sp<=69 - i + 65 ;sp++){
//         space = space + "+"
//     }    
//     for(let j=65;j<=i;j++){
//         ans = ans + String.fromCharCode(i)
//     }
//     console.log(space +ans )
// }

// Pattern 5 (Full Pyramid with Characters)
//      A
//     BBB
//    CCCCC
//   DDDDDDD
//  EEEEEEEEE

// for(let i = 65 ; i<= 69 ; i++){
//     let ans = "";
//     let space  = "";
//     for(let sp=69; sp>=i;sp--){
//         space = space + " ";
//     }
//     for(let j= 65; j<=i*2 - 65 ; j++ ){
//         ans = ans + String.fromCharCode(i) 
//     }
//     console.log(space + ans)
// } 

// Pattern 6 (Inverted Full Pyramid with Characters)
//  EEEEEEEEE
//   DDDDDDD
//   CCCCC
//    BBB
//     A
// for(let i = 69 ; i>= 65 ; i--){
//     let ans = "";
//     let space  = "";
//     for(let sp=69; sp>=i;sp--){
//         space = space + " ";
//     }
//     for(let j= 65; j<=i*2 - 65 ; j++ ){
//         ans = ans + String.fromCharCode(i) 
//     }
//     console.log(space + ans)
// } 

// Pattern 7 (Diamond with Characters)
//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE
//  DDDDDDD
//   CCCCC
//   BBB
//    A

// function diamondWithChar(){  
// for(let i = 65 ; i<= 69 ; i++){
//     let ans = "";
//     let space  = "";
//     for(let sp=69; sp>=i;sp--){
//         space = space + " ";
//     }
//     for(let j= 65; j<=i*2 - 65 ; j++ ){
//         ans = ans + String.fromCharCode(i) 
//     }
//     console.log(space + ans)
// }
// for(let i=68 ; i>=65;i--){
//     let space = "";
//     let ans = ""
//     for(let sp = 69; sp>=i; sp--){
//         space = space + " "
//     }
//     for(let j = 65; j<=i*2-65 ;j++){
//         ans = ans + String.fromCharCode(i)
//     }
//     console.log( space + ans)
// }
// }
// diamondWithChar()

// Pattern 8 (Hourglass with Characters)
//  EEEEEEEEE
//   DDDDDDD
//    CCCCC
//     BBB
//      A
//     BBB
//    CCCCC
//   DDDDDDD
//  EEEEEEEEE

// function Hourglass(){
// for(let i=69 ; i>=66;i--){
//     let space = "";
//     let ans = ""
//     for(let sp = 69; sp>=i; sp--){
//         space = space + " "
//     }
//     for(let j = 65; j<=i*2-65 ;j++){
//         ans = ans + String.fromCharCode(i)
//     }
//      console.log( space + ans)
// }        
// for(let i = 65 ; i<= 69 ; i++){
//     let ans = "";
//     let space  = "";
//     for(let sp=69; sp>=i;sp--){
//         space = space + " ";
//     }
//     for(let j= 65; j<=i*2 - 65 ; j++ ){
//         ans = ans + String.fromCharCode(i)
//     }
//     console.log(space + ans)
// }
// }
// Hourglass()

// Pattern 9 (Hollow Square with Characters)
//  AAAAA
//  A A
//  A A
//  A A
//  AAAAA
// for(i=1; i<=5;i++){
//     let space = ""
 
//     let ans= "";
//     for(let j=1; j<= 5 ;j++){
//         if( (i==1) || j==1 || j==5 || i==5){
//             ans = ans + "A";
//         }
//         else {
//             ans = ans + " "
//         }
//     }
        
//     console.log(space + ans ) 
// }
// Pattern 10 (Hollow Pyramid with Characters)
//  A
//  A A
//  A A
//  A A
//  AAAAAAAAA
// for(let i = 1; i<=7;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=7 ; j++){
//         if( i + j == 5 || j - i== 3 || i == 4){
//             ans = ans + "A";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }  


// Pattern 12 (Increasing Letters with Characters)
//  A
//  AB
//  ABC
//  ABCD
//  ABCDE

// for(let i=65 ; i<=69;i++){
//     let ans = ""
//     for(let j=65;j<=i;j++){
//         ans = ans + String.fromCharCode(j)
//     }
//     console.log(ans)
// }

// Pattern 13 (Decreasing Letters with Characters)
//  ABCDE
//  ABCD
//  ABC
//  AB
//  A

// for(let i=69 ; i>=65;i--){
//     let ans = ""
//     for(let j=65;j<=i;j++){
//         ans = ans + String.fromCharCode(j)
//     }
//     console.log(ans)
// }

// Pattern 14 (Right-Aligned Pyramid with Characters)
//      A
//     BB
//    CCC
//   DDDD
//  EEEEE
// for(let i= 65 ; i<=69;i++){
//     let space = "";
//     let ans = ""
//     for(let sp=69; sp>=i;sp--){
//         space = space + "+"
//     }
//     for(let j=65; j<=i; j++){
//         ans = ans + String.fromCharCode(i)
//     }
//     console.log(space + ans)
// }

// Pattern 15 (Inverted Right-Aligned Pyramid with Characters)
//  EEEEE
//   DDDD
//    CCC
//     BB
//      A
// for(let i= 69 ; i>=65;i--){
//     let space = "";
//     let ans = ""
//     for(let sp=65; sp<=69 -i + 65;sp++){
//         space = space + "+"
//     }
//     for(let j=65 ; j<=i; j++){
//         ans = ans + String.fromCharCode(i)
//     }
//     console.log(space + ans)
// }

// Pattern 16 (Diamond with Solid Center using Characters)
//  A
//  BB
//  CCC
//  DDDD
//  EEEEE
//  DDDD
//  CCC
//  BB
//  A

// function Pattern16(){
//     let ans = ""
//     for(let i =65; i<=69;i++){
//         let ans = "";
//         for(j=65;j<=i;j++){
//             ans = ans + String.fromCharCode(i)
//         }
//         console.log(ans)
//     }
//     for(let i=68; i>=65; i--){
//         let ans = "";
//         for(j=65; j<=i;j++){
//             ans = ans + String.fromCharCode(i)
//         }
//         console.log(ans)
//     }
// }
// Pattern16();

// Pattern 17 (Hollow Diamond using Characters)
//        A
//      A   A
//    A       A
//  A           A
//    A       A
//      A   A
//        A
// for(let i = 1; i<=7;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=7 ; j++){
//         if( i + j == 5 || j - i == 3 || i - j ==3 || i+ j == 11 ){
//             ans = ans + "A";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }

// Pattern 18 (Cross with Characters)
//  A A
//  A A
//  A
//  A A
//  A A

// for(let i = 1; i<=5;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=5 ; j++){
//         if( i - j ==0 || i+j ==6 ){
//             ans = ans + "A";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }


// Pattern 19 (Plus with Characters)
//  A A
//  A A
//  AAAAA
//  A A
//  A A

// for(let i = 1; i<=5;i++){
//     let ans = "";
//     let space = "";
//     for(let j= 1 ; j<=5 ; j++){
//         if( i ==3 || j ==2 || j==4  ) {
//             ans = ans + "A";
//         }
//         else{
//             ans = ans + " ";
//         }
//     }
//     console.log( space + ans)
// }