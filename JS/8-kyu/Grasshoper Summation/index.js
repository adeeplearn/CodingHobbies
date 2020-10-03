/*
  Title:
    Grasshoper Summation

  Description:
    Write a program that finds the summation of every number from 1 to num.
    The number will always be a positive integer greater than 0.
  
    Examples:
    summation(2) -> 3
    1 + 2

    summation(8) -> 36
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

    
*/

//solution
var summation = function (num) {
    let x = 0;
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            x = x + i;
        }
    }
    return x;
}

//sample-test
// describe('summation', function () {
//     it('should return the correct total', function () {
//       Test.assertEquals(summation(1), 1)
//       Test.assertEquals(summation(8), 36)
//     })
//   })