const findLongestWord = function (string = "") {
  // Write code under this line
  let words = string.split(" ");
  let LongestWord = words[0]; 
  for (const word of words) {
    if (word.length > LongestWord.length) {LongestWord = word;} 

  };
  return LongestWord;
  
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));



// const findLongestWord = function (string = "") {
//   // Write code under this line
//   let words = string.split(" ");
//   let LongestWord = words[0];
//   for (let i = 1; i < words.length; i += 1) {
//     if (words[i].length > LongestWord.length) { LongestWord = words[i]; }

//   };
//   return LongestWord;

// };
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'
