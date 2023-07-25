//? FIZZBUZZ -- A function is passed a number as a parameter. The function counts up to the number. If divisible by 3, the number is replaced with "Fizz". If the number is divisible by 5, it is replaced with "Buzz". If divisble by 15 then "Fizzbuzz."

const fizzNum = 3;
const buzzNum = 5;
const fizzbuzzNum = 15;

const fizzbuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % fizzbuzzNum === 0) {
      console.log("fizzbuzz");
    } else if (i % buzzNum === 0) {
      console.log("buzz");
    } else if (i % fizzNum === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
};

fizzbuzz(16);
