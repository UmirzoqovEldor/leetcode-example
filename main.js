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
//Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22]
// var leftRightDifference = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i-1; j < nums.length; j++) {

//            console.log(nums[i],nums[j]);
//            if
//         }

//     }
// };
// leftRightDifference([10,4,8,3])
//6- masala yechim ussullari
// var balancedStringSplit = function (s) {
//   let num = 0;
//   let countR = 0;
//   let countL = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "R") {
//       countR++;
//     } else {
//       countL++;
//     }
//     if(countL===countR){
//         num ++
//     }

//   }
//   console.log(num);
// };
// balancedStringSplit("LLLLRRRR");
// var subtractProductAndSum = function (n) { //1281-masala
//   let num = String(n).split("");
//   let count = 0;
//   let multiplain =1
//   console.log(num);
//   for (key of num) {
//     count += +key;
//     multiplain = multiplain*(+key)
//   }
//   return multiplain-count
// };
// subtractProductAndSum(234);
// var minimumSum = function (num) {//2160-msala
//   let n = num.toString().split("").sort().join("");
//   let num1 = n[0]+n[2];
//   let num2 = n[1] +n[3];

//   console.log(num2+num1);
// };
// minimumSum(4009);
// var runningSum = function(nums) {//1480-masala\
//   let count = 0
//   let newArry = []
//   for(key of nums){
//     newArry.push(count += key)
//   }
// console.log(newArry);
// };runningSum([1,2,3,4])
// var restoreString = function (s, indices) {//1528 -masala
//   let newArry = [];
//   for (let i = 0; i < s.length; i++) {
//     newArry[indices[i]] = s[i];
//   }
//   console.log(newArry.join(""));
// };
// restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]);
//
// var countMatches = function (items, ruleKey, ruleValue) { //1773-masala
//   let count = 0;

//   for (let i = 0; i < items.length; i++) {
//     if (ruleKey == "type" && items[i][0] == ruleValue) {
//       count++;
//     }
//     if (ruleKey == "color" && items[i][1] == ruleValue) count++;
//     if (ruleKey == "name" && items[i][2] == ruleValue) count++;
//   }
//   console.log(count);
// };
// countMatches(
//   [
//     ["phone", "blue", "pixel"],
//     ["computer", "silver", "phone"],
//     ["phone", "gold", "iphone"],
//   ],
//   "type",
//   "silver"
// );
//

// var minimizedStringLength = function (s) {
//   let step = s.split("")
//   let set = new Set([...step])
//   console.log(set.size);
// };
// minimizedStringLength("aaabc");
// var maximumNumberOfStringPairs = function (words) { //2744-masala
//   let count = 0;

//   for (let i = 0; i < words.length; i++) {
//     for (let j = i+1; j < words.length; j++) {
//       if (words[i] === words[j].split("").reverse().join("")) count++;
//     }
//   }

//   console.log(count);
// };
// maximumNumberOfStringPairs(["cd", "ac", "dc", "ca", "zz"]);
// var uniqueMorseRepresentations = function (words) { Morse aliffosi
//   let morseAlfa = [
//     ".-",
//     "-...",
//     "-.-.",
//     "-..",
//     ".",
//     "..-.",
//     "--.",
//     "....",
//     "..",
//     ".---",
//     "-.-",
//     ".-..",
//     "--",
//     "-.",
//     "---",
//     ".--.",
//     "--.-",
//     ".-.",
//     "...",
//     "-",
//     "..-",
//     "...-",
//     ".--",
//     "-..-",
//     "-.--",
//     "--..",
//   ];
//   let arry = [];
//   for (let i = 0; i < words.length; i++) {
//     let str = ''
//     const element = words[i];
//     for (let j = 0; j < element.length; j++) {
//       let index = element[j].charCodeAt() - 97;
//       str += (morseAlfa[index]);
//     }
//    if (!(arry.includes(str))) arry.push(str)

//   }
//   console.log(arry.length);
// };
// uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
// var numberOfLines = function (widths, s) {
//     let step = 0;
//     let sArry = s.split("")
//     console.log(sArry);

//     for (let i = 1; i < sArry.length; i++) {
//       if (widths[6]*i===100) console.log(true);
//       }
//     // console.log(step);
//   };

//   numberOfLines([
//     10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
//     10, 10, 10, 10, 10, 10, 10,
//   ],"abcdefghijklmnopqrstuvwxyz");
// var cellsInRange = function(s) {
//   let arry = []
//     let [s1 ,s2]  = s.split(":")
//     let start = s1[0].charCodeAt()
//     let end = s2[0].charCodeAt()
//     for (let i = start; i <= end; i++) {
//       for (let j = s1[1]; j <= s2[1]; j++) {
//         arry.push(String.fromCharCode(i)+j)

//       }
//     }
//     console.log(arry);
// var leftRightDifference = function(nums) {
//     let arry =[];
//     for (let i = 0; i < nums.length; i++) {
//       let leftCount = nums.slice(0,i).reduce((s,v) =>  s+v,0)
//       let rightCount = nums.slice(i+1).reduce((s,v) =>  s+v,0);
//       arry.push(Math.abs(leftCount-rightCount))
//     }
//     console.log(arry);
// };
// leftRightDifference([10,4,8,3])
// Tow Sum example
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// var twoSum = function(nums, target) {

//    for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//        if (nums[i]+nums[j] ===target) {

//        }

//     }

//    }
//    return[i,j]
// };
// twoSum([2,7,11,15],9)
//palindirom son

// var isPalindrome = function (x) {
//   let num = x.toString().split("").reverse().join("");
//   if (x.toString() === num) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// isPalindrome(-121);
// var mergeTwoLists = function (list1, list2) { 21 -masala

//   let sortNums = nums.sort((a, b) => a - b);

//    return(sortNums);
// };
// mergeTwoLists([], [0]);
// 26-masala
// var removeDuplicates = function (nums) {
//   let num = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       num.push(nums[i]);
//     }
//   }

//   return(num.length);
//   nums = num;
//   return(nums);
// };
// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
//27 masala
//  var removeElement = function(nums, val) {
//    let num = [];
//      for (let i = 0; i < nums.length; i++) {
//        if (nums[i] !== val) {

//          num.push(nums[i]);
//        }
//      }

//      console.log(num.length);
//      console.log(num);

// };
// removeElement([3,2,2,3],3)
// 35 masala
// var searchInsert = function(nums, target) {
//     nums.forEach((element,i) => {
//       if(element===target){
//          return(i);
//       }
//       else{
//          if (element+1 ===target) {
//             return(i+1);
//          }
//       }
//     });
// };
// searchInsert([1,3,5,6],7)
//2520-masala
// var countDigits = function (num) {
//   let count = 0;
//   for (let i = 2; i <= num; i++) {
//     if (num % i === 0) {
//        (count += 1);
//     }
//   }
//   console.log(count);
// };
// countDigits(100);
//66-masala
// var plusOne = function(digits) {
//     let num = digits.join("")
//     let x = +num +1
//     console.log(x.toString().split(""));
// };
// plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])
// 83 --masala
// var deleteDuplicates = function(head) {
//     let num = []
//     for (let i = 0; i < head.length; i++) {
//         if (head[i]!==head[i+1]) {
//            num.push(head[i])
//         }

//     }
//    console.log( num.sort((a,b)=> a-b));
// };
// deleteDuplicates([1,1,2,4,3])
// let mentor = {
//     frontend: {
//       react: [
//         { name: "jasur", salary: 200 },
//         { name: "jamshid", salary: 500 },
//       ],
//       vue: [
//         { name: "jasur", salary: 200 },
//         { name: "jamshid", salary: 449600 },
//       ],
//     },
//     backend: [
//       { name: "jasur", salary: 200 },
//       { name: "jamshid", salary: 500 },
//     ],
//     mobile: [
//       { name: "jasur", salary: 200 },
//       { name: "jamshid", salary: 8879 },
//     ],
//   };

// function recurse (user) {

//    if (Array.isArray(user)) {
//     return user.reduce((prev,current)=> prev+current.salary,0)

//    }

//    else{
//     let sum =0
//     for (let item of Object.values(user)){

//         sum +=recurse(item)
//     }
//     return(sum);
//    }

// }

// console.log(recurse(mentor));

// 557 masala
// var reverseWords = function(s) {
//   let num = []
//     let str= s.split(" ")
//     for (let i = 0; i < str.length; i++) {
//       let y = (str[i].split("").reverse().join(""));
//       num.push(y)
//     }
//     return(num);
// };
//  reverseWords("Let's take LeetCode contest")
// var calPoints = function(operations) {
//   let oper = []
//     for(let num of operations){
//       switch (num) {
//         case typeof num ==="number" :
//           oper.push(num)
//           break;
//       case :
//         default:
//           break;
//       }
//     }
// }
// operations(["5","2","C","D","+"])
// var twoSum = function(nums, target) {
//   let num =[]
//   for (let i = 0; i < nums.length; i++) {
//       for (let j = 0; j < nums.length; j++) {
//          if (nums[i]+nums[j] ===target) {
//            num.push(i,j)
//   break
//          }

//       }

//      }
//     return num
//   };
//   twoSum([2,7,11,15],9)
// var longestCommonPrefix = function(strs) {
//   console.log(strs=="",",");
//     let result = "";
//     for (let i = 0; i < strs.length; i++) {
//       if (strs =="") {
//        result += result
//       }else if (strs.every((val)=>val[i]===strs[0][i])) {
//         result +=strs[0][i]
//       } else {
//         break
//       }

//     }
//     console.log(result);
// };longestCommonPrefix([""])
// var isValid = function(s) {
//   let valid = []
//     for(let x of s){
//       if (x==='(') {
//         valid.push(")")
//       }else if (x==="["){
//         valid.push("]")
//       } else if(x==="{"){
//         valid.push("}")
//       }else if (x!==valid.pop())
//       console.log(false);
//     }

//       console.log(valid.length ===0); ;

// };isValid( "()")
// var removeDuplicates = function(nums) {// 7-masala
//   let x = [...new Set(nums)]

//   console.log(x)

// };
// removeDuplicates([1,1,2])
// var removeElement = function(nums, val) {
//   let s =0
//     for(let i=0;i<nums.length;i++){
//         if(nums[i] !== val){
//             nums[s] =nums[i]

//             s++
//         }

//     }
//     console.log(nums[s]);
//     return(s);

// };removeElement( [0,1,2,2,3,0,4,2],2)
// var searchInsert = function(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i]>=target) {
//       console.log(i);
//     }

//   }
//   console.log(nums.length);
// };searchInsert([1,3,5,6],5)

// var replaceDigits = function (s) {
//   s = s.split("");

//   for (let i = 1; i < s.length; i += 2) {
//     s[i] = String.fromCharCode(s[i - 1].charCodeAt() + +s[i]);
//   }
//   console.log(s.join(""));
// };
// replaceDigits("a1c1e1");
// var isEmpty = function(obj) {
//     if (Array.isArray(obj)) {
//       return obj.length===0
//     }else return(Object.values(obj)).length===0

// };isEmpty({"x": 5, "y": 42})
// var chunk = function(arr, size) {

//    let num = []
//    for (let i = 0; i < arr.length; i+=size) {

//    num.push(arr.slice(i,Math.min(i+size,arr.length)))

//    }
//   console.log(num);
// };
// chunk([1,2,3,4,5],1)
// var plusOne = function(digits) {
//   let num = digits.join("")

//  let x = BigInt(num) +1n
//   console.log(x.toString().split(""));
// };plusOne( [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])

// var addBinary = function (a, b) {
//   let x = BigInt(parseInt(b, 2));
//   let y = BigInt(parseInt(a, 2));
//   console.log(x+y);
//    console.log((x+y).toString(2));
// };
// addBinary(
//   "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
//   "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
// );
// var fizzBuzz = function(n) {
//   let arr=[]
//     for (let i = 1; i <=n; i++) {
//      if (i%3 ===0 && i%5===0) {
//       arr.push("FizzBuzz")
//      } else if(i%3===0){
// arr.push("Fizz")
//      }else if(i%5===0){
//       arr.push("Buzz")
//            } else {
//             arr.push(i.toString())
//            }

//     }
//     console.log(arr);
// };fizzBuzz(5)

// var findPeaks = function(nums) {
//    let arr =[]
// while (nums.length>0) {
//    let bob = nums.shift()
// arr.push(bob);
// let alica = nums.shift()
// arr.push(alica)
// }
// console.log(arr);
// };findPeaks([5,4,2,3])//3245

// var sumIndicesWithKSetBits = function(num) {
//    if (num<10) return num

//       else{
//          let num = [...num.toString()].reduce((a,b)=>a+Number(b))
//          return sumIndicesWithKSetBits(num)
//       }

// };sumIndicesWithKSetBits(38)
// var nextGreaterElement = function (nums1, nums2) {
//   let arr = [];
//   for (let x of nums1) {
//     let ind = nums2.indexOf(x) + 1;
//     let slice = nums2.slice(ind);
//     if (!slice.length) {
//       arr.push(-1);
//     }
//     for (let y of slice) {
//       if (y > x) {
//         arr.push(y);
//         break;
//       } else arr.push(-1);
//     }
//   }
//   console.log(arr);
// };
// nextGreaterElement( [1,3,5,2,4],[5,4,3,2,1]);
// var checkDistances = function (s, distance) {
//     let arr =[]
//     let str = s.split("")
//     for(let i=0; i<(str.length)/2; i++){
//         let x = distance[i]

//         if(str[i]===str[i+x]){
//             console.log(true);
//         }else console.log(false);
//     }
//     console.log(arr);
// };
// checkDistances(
//   "abaccb",
//   [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// );
// var applyOperations = function(str) {
//   let arr = []

//   for (let i = 0; i < str.length; i++) {
//     if(str[i].match(/[a-zA-Z]/g)!==null && str[i].match(/\d/g)!==null){
//             arr.push(5)
//          } else if (str[i].match(/[a-zA-Z]/g)!==null) arr.push(str[i].length);
//          else if(str[i].match(/\d/g)!==null) arr.push(+str[i])

//   }

//  console.log(Math.max(...arr));
// };applyOperations( ["1","01","001","0001"])
//  var vowelStrings = function(words, left, right) {
//     let count =0
//     let unli = ['a','e','u','o','i']
//     for (let i = left; i <=right; i++) {

//         if (
//             unli.includes(words[i][0]) &&
//             unli.includes(words[i][words[i].length - 1])
//           ) count++

//     }
//     console.log(count);
// };vowelStrings(["hey","aeo","mu","ooo","artro"],1,4)
// var similarPairs = function (words) {
//   let count = 0;
//   for (let i = 0; i < words.length ; i++) {
//     let splitI = words[i].split("").sort((a, b) => a.localeCompare(b));
//     for (let j = i + 1; j < words.length; j++) {
//       let splitJ = words[j].split("").sort((x, y) => x.localeCompare(y));
//       if ([...new Set(splitI)].join("") === [...new Set(splitJ)].join(""))
//         count += 1;
//     }
//   }
//   console.log(count);
// };
// similarPairs(["aabb", "ab", "ba"]);
// let cars =[
// {id:1 ,year:1998,engege:1,name:'tico'},
// {id:2 ,year:2005,engege:1,name:'matiz'},
// {id:3 ,year:2010,engege:1,name:'gentro'},
// {id:4 ,year:2012,engege:1,name:'coblt'},
// {id:5 ,year:2001,engege:1,name:'malubu'},
// {id:6 ,year:2009,engege:1,name:'damas'},
// {id:7 ,year:2018,engege:1,name:'trecer'},]

// let newMap=cars.map((val)=>{
//   if (2000>val.year) {
//     return {...val,status:'eski'}
//   }else if(2000<val.year &&val.year<=2010){
//     return {...val, status:'urta xil'}
//   }else return {...val,status:'yangu'}

// });
// console.log(newMap);
// var countBits = function (n) {
//   let arr = [];
//   for (let i = 0; i <= n; i++) {
//     arr.push(eval(i.toString(2).split("").join("+")));
//   }
//   console.log(arr);
// };
// countBits(5);
// var sortColors = function(nums,k) {
//     let count =0
//      for (let i = 0; i < nums.length; i++) {
//         if (nums[i]+nums[i+1]===k) {
//             count++
//         }

//      }
//      console.log(count);
//   };sortColors([1,2,3],3)
// let obj =[
//     {id:1,name:'AShmat',age:21},
//     {id:2,name:'AShmat',age:23},
//     {id:3,name:'AShmat',age:18},
//     {id:4,name:'AShmat',age:25},
//     {id:5,name:'AShmat',age:20},
//     {id:6,name:'AShmat',age:15}]

//     for (let i = 0; i < obj.length; i++) {

//     }
//  let arry = [1,3,[4,5], [7,9],6]
// function getArry(params) {
//     let nums=[]
//     for(let num of params){
//         if (!Array.isArray(num)) {
//            nums.push(num)
//         }else{

//         nums.push(...num)
//         }
//     }
//     console.log(nums);
// }
// getArry(arry)

// Array.prototype.last = function() {
//     if (this.length===0) {
//         return -1
//     }
//   else{
//     let x= this[this.length-1]
//   return(x);
//   }
// };
// let arr= []
// console.log( arr.last());
// var uniqueOccurrences = function(nums) {

//         nums.sort();

//         for (let i = 1; i < nums.length; i++) {
//             if (nums[i] === nums[i - 1]) {
//                 return (nums[i]);
//             }
//         }

//         return null;

// };uniqueOccurrences([2,1,2,5,3,2])

// var sortSentence = function (s) {
//   let srt = s.split(" ")
//   let str2 = srt.map((val)=>val.split(""))
//  let str3 = str2.map((arr)=>arr.reverse())
//  let str4 = str3.map((x)=>x.join(""))
//  let m = str4.sort()
//  let arrr= []
// for (let i = 0; i < m.length; i++) {
//   arrr.push(m[i].split("").splice(1).reverse().join(""));

// }
// console.log(arrr);
// //  let srt5 =m.map((x)=>x.split("").splice(1).reverse().join(" "))
// //  console.log(srt5);

// };
// function sortSentence(s = "") {
//   let arr = s
//     .split(" ")
//     .map((str) => [str.charAt(str.length - 1), str.slice(0, str.length - 1)]);
//   return arr
//     .sort((item, itemNext) => item[0] - itemNext[0])
//     .map((i) => i[1])
//     .join(" ");
// }

// console.log(sortSentence("is2 sentence4 This1 a3"));
// var divideArray = function (nums) {
//   let str = nums.sort((a, b) => a - b);
//   let arr = [];

//   for (let i = 0; i < str.length; i = i + 2) {
//     if (str[i] === str[i + 1]) {
//       arr.push(true);
//     } else {
//       arr.push(false);
//     }
//   }

//   let num = [...new Set(arr)];
//   if (num.length===1&&num[0]==true) {
//     return (true);
//   }else{
//     return(false);
//   }
// };
// divideArray([1, 2, 3, 4]);

// var canBeEqual = function (target, arr) {
//   let x = target.sort((a,b)=>a-b)
//   let y = arr.sort((a,b)=>a-b)
//   let num =[]
//   for (let i = 0; i < x.length; i++) {
//     if (x[i]===y[i]) {
//       num.push(true)
//     }else{
//       num.push(false)
//     }

//   }

// let m =[...new Set(num)]

//   if (m.length===1&&m[0]===true) {
//     console.log(true);
//   }else{
//     console.log(false);
//   }
// };
// canBeEqual([1,2,3,4], [2,4,1,3]);
var sumOfUnique = function (nums) {
  
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    
    if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
     continue;
    }
    count+= +nums[i]
    
   }
  console.log(count);
};
sumOfUnique([1,2,3,2]);
