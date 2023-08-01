/*
Algorithim: Two Sum

Given an array of numbers and a sum, return an array of pairs that add up to the sum

Example: array= [0,1,2,3,4] sum= 5
Expected result: [[1,4], [2,3]]

Input: an array of integers & an integer
Output: An array of one or more arrays with each containing a pair of numbers

1. Set result array to contain successful pairs
2. set i to 0



*/

array1 = [0, 1, 5, 3, 2, 4];
sum = 5;

const twoSumLinear = (arr, num) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (i + j === sum) {
        result.push([i, j]);
      }
    }
  }
  return result;
};
console.log(twoSumLinear(array1, sum));

const twoSumHash = (arr, sum) => {
  let results = [];
  let hashMap = [];

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const complement = sum - currentNum;

    if (hashMap.indexOf(complement) !== -1) {
      results.push([currentNum, complement]);
    }
    hashMap.push(currentNum);
  }

  return results;
};

console.log(twoSumHash(array1, sum));
