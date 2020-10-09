/*
  
Title:
    Reverse Word
  
Description:
    Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples:
    "This is an example!" ==> "sihT si na !elpmaxe"
    "double  spaces"      ==> "elbuod  secaps"

Kata Link:
    https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
  
Discuss Link:
    https://www.codewars.com/kata/5259b20d6021e9e14c0010d4discuss
  
Solutions Link:
    https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/solutions
*/

//solution
function reverseWords(str) {
    let space = str.split(' ')
    let arr = []

    if (space.length >= 1) {
        for (let j = 0; j < space.length; j++) {
            arr.push(space[j].split('').reverse().join(''))
        }
        return arr.join(' ')
    }
}

//best-practice
// function reverseWords(str) {
//     return str.split(' ').map(function(word){
//       return word.split('').reverse().join('');
//     }).join(' ');
//   }