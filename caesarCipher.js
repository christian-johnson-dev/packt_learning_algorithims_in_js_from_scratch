//* A function is passed a string and a number. for each letter in the string the letter increases by the number.
// caesarCiper("axe and hatchet", 3) should produce "dah dqg kdwfkhw"

const caesarCipher = (str, num) => {
  num = num % 26;
  // create a variable of ignored characters
  const ignoredChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"; //function will ignore these characters
  const lowerCaseStr = str.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  let newString = "";
  for (let i = 0; i < lowerCaseStr.length; i++) {
    const char = lowerCaseStr[i];
    // handle ignored characters
    if (ignoredChars.includes(char)) {
      newString += char;
      continue; // skip to next iteration
    }
    // get the current index within the alphabet
    const currentIndex = alphabet.indexOf(char);

    // calculate the new index
    let newIndex = currentIndex + num;

    // handle exessive indexes
    if (newIndex > 25) {
      newIndex = newIndex - 26;
    }

    // handle negative indexes
    if (newIndex < 0) {
      newIndex = newIndex + 26;
    }

    // handle capitalization
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
      continue;
    }
    // add letter at new index to string
    newString += alphabet[newIndex];
  }
  return newString;
};

console.log(caesarCipher("T nlxp, T dlh, T Nzybfpcpo.", 15));
