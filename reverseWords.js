// ** reverse the letters of each word in a string.  Can not use .reverse method.
// Time Complexity: O(n * m), where n is the number of words, and m is the maximum length of a word within the originalArray
// Space complexity:O(n + k)where n is the number of words and k is the length of the longest word

const reverseWords = (str) => {
  const originalArray = str.split(" ");
  const newArray = [];
  originalArray.forEach((word) => {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    console.log(reverseWord);
    newArray.push(reverseWord);
  });
  return newArray.join(" ");
};

console.log(reverseWords("Grover slept on the couch last night.")); //revorG tpels no eht hcuoc tsal .thgin
