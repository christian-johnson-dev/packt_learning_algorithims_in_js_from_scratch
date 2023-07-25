const isPalindrome = (str) => {
  //*clean up string
  cleanedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      cleanedStr += char;
    }
  }
  console.log("Cleaned string is ", cleanedStr);
  // //*compare front to end and move towards middle
  // let start = 0;
  // let end = cleanedStr.length - 1;

  // while (start < end) {
  //   if (cleanedStr[start] !== cleanedStr[end]) {
  //     return false;
  //   }
  //   start++;
  //   end--;
  // }
  // return true;
  return cleanedStr === cleanedStr.split("").reverse().join("") ? true : false;
};

console.log(isPalindrome("Grover Evorg^"));
