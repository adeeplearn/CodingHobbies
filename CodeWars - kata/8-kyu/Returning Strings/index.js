/*
  Title:
    Returning String

  Description:
    Make a function that will return a greeting statement that uses an input; 
    your program should return, "Hello, <name> how are you doing today?".
  
    Examples:
    "Hello, <name> how are you doing today?"
    "Hello, Ryan how are you doing today?"

    
*/

//solution
function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}

//sample-test
// describe("Basic tests",_=>{
//     Test.assertEquals(greet("Ryan"), "Hello, Ryan how are you doing today?");
//     Test.assertEquals(greet("Shingles"), "Hello, Shingles how are you doing today?");
//   })