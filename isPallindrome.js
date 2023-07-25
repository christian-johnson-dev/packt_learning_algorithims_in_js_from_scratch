const isPallindrome = (str) => {
  //clean up string to be just lowwercase letters with no spaces
  let cleanedStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if ((char >= "a" && char <= "z") || (char >= "0") & (char <= "9")) {
      cleanedStr += char;
    }
  }
  console.log("cleanded string: ", cleanedStr);
  //using the length attribute compare the first and last indexes working your way to the middle.
  let frontIndex = 0;
  let endIndex = cleanedStr.length - 1;
  while (frontIndex < endIndex) {
    if (cleanedStr[frontIndex] !== cleanedStr[endIndex]) {
      return false;
    }
    frontIndex++;
    endIndex--;
  }
  return true;
};

console.log(isPallindrome("123e re5' 21"));
