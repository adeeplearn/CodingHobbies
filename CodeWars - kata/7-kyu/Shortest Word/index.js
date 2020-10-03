/*
  Title:
    Shortest Word

  Description:
    Simple, given a string of words, return the length of the shortest word(s).
    String will never be empty and you do not need to account for different data types.

    
*/

//solution

function findShort(s) {

    //  can use code below
    //   let warr = s.split(' ');  // add to array by emit the space 
    //   let wlen = warr.map(str => str.length ); // count string length in arr element
    //   let sw = Math.min(...wlen);    // spread values in array with min number
    //   return sw;     // get the shortest word

    return Math.min(...s.split(' ').map(str => str.length));
}

//sample-test
// Test.describe("Example tests",_=>{
//     Test.assertEquals(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
//     Test.assertEquals(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
//     });