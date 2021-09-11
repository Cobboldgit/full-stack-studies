// let btn = document.getElementById('btn')

// function clickbtn() {
//     print()
// }

// let fac = (num) => {
    
//     for (let i = num-1; i >= 1; i-- ) {       
//         let comb = num * i
//          num = comb
       
//     }
//     let comb = num
//     return num
// }

// console.log(fac(4));

// //same as above

let fac2 = (num2) => {
    
    for (let i = num2-1; i >= 1; i--) {
        addup = num2 + i;
        num2 = addup
        console.log(addup);
    }
        addup = num2
        return num2
}

console.log(fac2(3));


//my code 


// let tobinary = (x, y) => {
//     let remainder = x % y;
//     console.log(`--${remainder}--`);
//     let quotient = Math.floor(x / y)
//     console.log(`--${quotient}--`);
    
//         for (let i = remainder; i < 0; i++ ) {
//             console.log(i);
//         }
    
    
    
// }

// console.log(tobinary(2, 2));

// program to convert decimal to binary
/**function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem5}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}**/

// take input
/**let number = prompt('Enter a decimal number: ');

convertToBinary(number);**/



//my try




// function FirstFactorial(num) { 
    
//     k = num;
//       for (i = num-1; i > 0; i--){
//         console.log(i);
//         j = k * i;
//         console.log(j);
//         k = j;   
//       }
//       num = j;
    
//       // code goes here  
//       return num; 
             
//     }

//     console.log(FirstFactorial(4));



