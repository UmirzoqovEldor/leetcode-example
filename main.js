// 1-masala Sum Multiples
// var sumOfMultiples = function (n) {

//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum);
// };
// sumOfMultiples(7);
// 2-masala Number of good pairs
// var numIdenticalPairs = function (nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j]) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// };
// numIdenticalPairs([1, 1, 1, 1]);
// 3-masala
// var differenceOfSums = function (n, m) {
//     var sum = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % m == 0) {
//       sum += i;
//     }
//   }
//   var num = 0;
//   for (let k = 1; k <= n; k++) {
//     if (!(k % m === 0)) {
//       num += k;
//     }
//   }

//   return num-sum;
// };
// differenceOfSums(10, 3);
//4-masala
// accounts[0]
// var maximumWealth = function (accounts) {
//   let count = 1;
//   accounts.forEach((element) => {
//     let num = element.reduce((val, sum) => val + sum);
//     if (count < num) count = num;
//        });
//   return count
// };
// maximumWealth([
//   [2, 8, 7],
//   [7, 1, 3],
//   [1, 9, 5],
// ]);
//5-masala kids With Candies
// var kidsWithCandies = function (candies, extraCandies) {
//     let result = [];
//     for (let i = 0; i < candies.length; i++) {
//         if (candies[i] + extraCandies >= Math.max(...candies)) {
//             result.push(true);
//         } else {
//             result.push(false);
//         }
//     }
//     return result;
// };

// kidsWithCandies([2, 3, 5, 1, 3], 3);
// 6-masala ishlolmadim
// 7-8-masala
// var balancedStringSplit = function(s) {
//     let sum = 0;
//     let bal = 0;
//     for(let i =0; i < s.length;i++){
//         if(s[i] === "R"){
//             bal +=1
//         }else{
//             bal -=1
//         }

//         if(bal===0){
//             sum +=1;
//         }
//     }
//        console.log(sum);

//     };
//   balancedStringSplit("RLRRLLRLRL")
// Running Sum 7-masala 8-masala
// var runningSum = function(nums) {

//   };
//   runningSum ([1,2,3,4])
//9-masala number of steps
// var numberOfSteps = function (num) {
//   let step = 0;
//   while (num > 0) {
//     if (num % 2 == 1) num -= 1;
//     else num /= 2;
//  step++;
//   }

//   console.log(step);
// };
// numberOfSteps(123);
// 12-masala
// var numIdenticalPairs = function (nums) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] == nums[j] && (i * j) % 2 === 0) {
//         console.log(i * j);
//         count += 1;
//       }
//     }
//   }
//   console.log(count);
// };
// numIdenticalPairs([1, 2, 3, 4]);
// 6-9-10-11 masalalar
