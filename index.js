const assert = require("./testframework");

function arabicToRoman(number) {
  let count = number;
  let romanNum = "";
  const arrayKeys = Object.keys(numHash).sort((a, b) => b - a);
  arrayKeys.forEach(num => {
    arabicNum = Number(num); //This deals with the JS type coersion. Object.keys(obj) produces an array of strings, so the math on all this works as just weird JS type coersion, if don't explicitly change the strings to nums, but it is clearer if explictly manipulate the type to Number.
    while (count >= arabicNum) {
      romanNum += numHash[arabicNum];
      count -= arabicNum;
    }
  });
  return romanNum;
}

const numHash = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

const tests = {
  'Number one should convert to Roman Num "I"': function() {
    assert.equal("I", arabicToRoman(1));
  },
  // assert.equal("II", arabicToRoman(2)),
  // assert.equal("III", arabicToRoman(3)),
  // assert.equal("IV", arabicToRoman(4)),
  // assert.equal("V", arabicToRoman(5)),
  // assert.equal("VI", arabicToRoman(6)),
  // assert.equal("VIII", arabicToRoman(8)),
  // assert.equal("IX", arabicToRoman(9)),
  // assert.equal("X", arabicToRoman(10)),
  // assert.equal("XI", arabicToRoman(11)),
  // assert.equal("XII", arabicToRoman(12)),
  // assert.equal("XIV", arabicToRoman(14)),
  // assert.equal("XV", arabicToRoman(15)),
  // assert.equal("XVI", arabicToRoman(16)),
  // assert.equal("XVII", arabicToRoman(17)),
  // assert.equal("XX", arabicToRoman(20))
};

//When the below are commented out, why do the tests run?

const runTests = tests => {
  const arrayKeys = Object.keys(tests);
  arrayKeys.map(test => {
    // return console.log(test); //this somehow prints out both the key and computed value -- because value wasn't wrapped in function; now that it is it no longer runs unless called.
    return console.log(test), tests[test]();
  });
};

runTests(tests);
