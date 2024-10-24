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

function checkSpaces(n, yesterday, today) {
    let count = 0; 
    for(let i= 0; i < n; i++) {
        if(yesterday[i] === 'C' && today[i] === 'C') {
            count++; 
        }
    }
    return count;
}

console.log(checkSpaces(5, "CCC.C", ".CC.." ));

// binary to decimal 
// 1. input number 
// 2. string is "111"
// 3. for loop i equal zero, i is less than number, i--
// 4. 

function BtoD (n) {
    let number = 0;
    let binary = [];
    for(let i=0; i < number; i--) {
        if(binary[i] === '0001') 
            number++;
    }
    
}

console.log(BtoD("1101"));

functionof binary to deciaml 

