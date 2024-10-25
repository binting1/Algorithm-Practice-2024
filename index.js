// function factorial (n) {
//     if (n < 1) {
//         return;
//     }
//     let result = 1;
//     for (let i =1; i <= n; i++){
//         result *= i;
//     }
//      return result;
// }

// function checkSpaces(n, yesterday, today) {
//     let count = 0; 
//     for(let i= 0; i < n; i++) {
//         if(yesterday[i] === 'C' && today[i] === 'C') {
//             count++; 
//         }
//     }
//     return count;
// }

// console.log(checkSpaces(5, "CCC.C", ".CC.." ));

// function binaryToDec (binary) {
//     let decimal = 0; 
//     for(let i=0; i < binary.length; i++) {
//         if(binary[binary.length - i-1] === "1"){
//             decimal = decimal + Math.pow(2,i);
            
//         }
//     }
//     return decimal;
// }

// console.log(binaryToDec("1101"))

function decimalToBin (decimal) {
    let binary = ""; 
    if (decimal === 0) {
        return 0;
    }
    while(decimal >= 1) {
        let remainder = decimal %2;
        binary = remainder + binary;
        decimal = Math.floor(decimal / 2);
    }
         return binary;   
        }

console.log(decimalToBin(9));