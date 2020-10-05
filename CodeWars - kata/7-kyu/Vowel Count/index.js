/*
  Title:
    Vowel Count

  Description:
    Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).

    The input string will only consist of lower case letters and/or spaces.

    
*/


//solution
const getCount = str => str.split('').reduce((vowelsCount, str) => /[aiueo]/g.test(str) ? vowelsCount += 1 : vowelsCount, 0)

//best-practice(long)
// function getCount(str) {
//     var vowelsCount = 0;
//     var vowels = ["a","e","i","o","u"];
//     for(var i = 0;i < str.length;i++){
//       for(var j=0;j<vowels.length;j++){
//         if(str[i] === vowels[j]){
//           vowelsCount++;
//         }
//       }
//     }

//     return vowelsCount;
//   }

//best-practice(short)
// function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   }

//sample-test
// describe("Case 1", function(){
//     it ("should be defined", function(){
//         Test.assertEquals(getCount("pear tree"), 4)
//     });
// });