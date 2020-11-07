// function checkForSpam(str) {
//     'use strict';
//     // Write code under this line
//     str = str.toLowerCase();
//     if (str.includes('spam') || str.includes('sale')) {
//         str = true;
//     } else { str = false;}
//     return str;
// }


function checkForSpam(str) {
    'use strict';
    // Write code under this line
    str = str.toLowerCase();
    if (str.includes('spam') || str.includes('sale')) {
        return true;
    } else { return false; }
}


let a = 'Latest technology news'
console.log(a)
console.log(checkForSpam('Latest technology news')); // false
console.log(a)


// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true