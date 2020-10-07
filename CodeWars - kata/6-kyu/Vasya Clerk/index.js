function tickets(peopleInLine) {
    let vasyaHands = {
        'm20': 0,
        'm50': 0,
        'm100': 0,
    }

    for (money of peopleInLine) {
        switch (money) {
            case 100:
                if (vasyaHands.m20 >= 1 && vasyaHands.m50 >= 1) {
                    vasyaHands.m20--
                    vasyaHands.m50--
                    vasyaHands.m100++
                } else if (vasyaHands.m20 >= 3) {
                    vasyaHands.m20 -= 3
                    vasyaHands.m100++
                } else {
                    return 'NO'
                }
                break;

            case 50:
                if (vasyaHands.m20 >= 1) {
                    vasyaHands.m20--
                    vasyaHands.m50++
                } else {
                    return 'NO'
                }
                break;

            case 25:
                vasyaHands.m20++
                break;
            default:

                break;
        }
    }
    return 'YES'
}

//best=practice
// function Clerk(name) {
//     this.name = name;

//     this.money = {
//       25 : 0,
//       50 : 0,
//       100: 0 
//     };

//     this.sell = function(element, index, array) {
//       this.money[element]++;

//       switch (element) {
//         case 25:
//           return true;
//         case 50:
//           this.money[25]--;
//           break;
//         case 100:
//           this.money[50] ? this.money[50]-- : this.money[25] -= 2;
//           this.money[25]--;
//           break;
//       }
//       return this.money[25] >= 0;
//     };
//   }

//   function tickets(peopleInLine){
//     var vasya = new Clerk("Vasya");
//     return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
//   }

//best-practice2
// function tickets(peopleInLine) {
//     var bills = [0, 0, 0]
//     for (var i = 0; i < peopleInLine.length; i++) {
//       switch (peopleInLine[i]) {
//         case 25:
//           bills[0]++
//           break

//         case 50:
//           bills[0]--
//           bills[1]++
//           break

//         case 100:
//           bills[1] ? bills[1]-- : bills[0] -= 2
//           bills[0]--
//           break
//       }

//       if (bills[0] < 0) {
//         return 'NO'
//       }
//     }

//     return 'YES'
//   }

//sample-test
// console.log(tickets([25, 25, 50, 50]), "YES");
// console.log(tickets([25, 50, 100]));
// console.log(tickets([25, 100]), "NO");