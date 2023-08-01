const array1 = [9, 7, 2, 0, 3, 9, 0];

//**===== Mean Value =====**//
// The mean is the average of of all the numbers
const meanValue = (arr) => {
  let total = 0;
  arr.forEach((num) => {
    total += num;
  });
  const totalAlt = arr.reduce((a, b) => a + b, 0); //An alternate method of getting the sum total
  return total / arr.length;
};

//**===== Median Value ===== */
//The median is the middle index (if total indices are odd)
//The median is the mean of the two middle indices (if total indices are even)
const medianValue = (arr) => {
  arr.sort((a, b) => a - b); //sorts numerically rather than by string value
  if (arr.length % 2 === 1) {
    return arr[Math.floor(arr.length / 2)];
  } else {
    const midIndex = arr.length / 2 - 1;
    const median = (arr[midIndex] + arr[midIndex + 1]) / 2;
    return median;
  }
};

//**===== Mode Value ===== */
const modeValue = (arr) => {
  const modeObj = {};
  let maxFrequency = 0;
  let modes = [];

  //make a hashmap of the array values and their frequency
  arr.forEach((arrNum) => {
    if (!modeObj[arrNum]) {
      modeObj[arrNum] = 0;
    }
    modeObj[arrNum]++;
  });

  for (let num in modeObj) {
    if (modeObj[num] > maxFrequency) {
      modes = [num];
      maxFrequency = modeObj[num];
    } else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  if (modes.length === modeObj.size) {
    modes = [];
  }
  return modes;
};

const meanMedianMode = (arr) => {
  return {
    mean: meanValue(arr),
    median: medianValue(arr),
    mode: modeValue(arr),
  };
};

console.log(meanMedianMode(array1));
