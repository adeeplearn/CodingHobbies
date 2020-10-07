/*
  
Title:
    Unique In Order
  
Description:
    Implement the function unique_in_order which takes as argument a sequence
    and returns a list of items without any elements with the same value next
    to each other and preserving the original order of elements.
  
Examples:
    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
  
Kata Link:
    https://www.codewars.com/kata/unique-in-order
  
Discuss Link:
    https://www.codewars.com/kata/unique-in-order/discuss
  
Solutions Link:
    https://www.codewars.com/kata/unique-in-order/solutions
*/

//solution
const uniqueInOrder = iterable => {
    if (typeof iterable === 'string') {
        iterable = iterable.split('')
    }
    return iterable.filter((element, index, arr) => element !== arr[index + 1]);
}

//best-practice

// function uniqueInOrder(it) {
//     var result = []
//     var last

//     for (var i = 0; i < it.length; i++) {
//       if (it[i] !== last) {
//         result.push(last = it[i])
//       }
//     }

//     return result
//   }

// var uniqueInOrder = function (iterable)
// {
//   return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
// }

//sample-test
console.log(uniqueInOrder('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])