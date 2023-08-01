/*
Algorithim: Bubble Sort

Sort an array of numbers

Input: An array of integers
Output: A sorted arraay of integers

*/

let array1 = [3, 5, 1, 7, 2];

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
  return arr;
};

console.log(bubbleSort(array1));

const bubbleSort2 = (arr) => {};
