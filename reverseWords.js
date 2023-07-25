// * reverse the order of words in a string.  Can not use .reverse method.

const reverseWords = (str) => {
  const originalArray = str.split(" ");
  const newArray = [];
  for (let i = originalArray.length - 1; i >= 0; i--) {
    newArray.push(originalArray[i]);
  }
  return newArray.join(" ");
};

console.log(reverseWords("Grover slept on the couch last night."));

//Time Complexity is O(n) with n being the length of the original string
