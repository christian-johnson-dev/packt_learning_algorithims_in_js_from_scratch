// * Reverse an array in place.  Do not create a new array.

const reverseArray = (arr) => {
  for (let i = 0; i < arr.length / 2; i++) {
    //All elements have been swapped when reaching the middle
    const tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
