/*
  Title:
    Sum Positive

  Description:
    You get an array of numbers, return the sum of all of the positives ones.  

    Examples:
    [1,-4,7,12] => 1 + 7 + 12 = 20

    Note: if there is nothing to sum, the sum is default to 0.
*/

//solution
function positiveSum(arr) {
    let reducer = (total, num) => total + num;
    let positiveNum = (num) => num > 0;

    return arr.filter(positiveNum).reduce(reducer, 0);
}

//best-practice
// function positiveSum(arr) {
//     var total = 0;    
//     for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
//       if (arr[i] > 0) {                   // if arr[i] is greater than zero
//         total += arr[i];                  // add arr[i] to total
//       }
//     }
//     return total;                         // return total
//   }


//sample-test
// Test.assertEquals(positiveSum([1,2,3,4,5]),15);
// Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
// Test.assertEquals(positiveSum([]),0);
// Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
// Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);