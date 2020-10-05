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

//sample-test
// describe("Case 1", function(){
//     it ("should be defined", function(){
//         Test.assertEquals(getCount("pear tree"), 4)
//     });
// });