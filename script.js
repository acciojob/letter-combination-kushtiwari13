function letterCombinations(input_digit) {
  const digitMap = {
    "0": "0",
    "1": "1",
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  const combinations = [];

  function backtrack(combination, nextDigits) {
    if (nextDigits.length === 0) {
      combinations.push(combination);
      return;
    }

    const currentDigit = nextDigits[0];
    const letters = digitMap[currentDigit];

    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      backtrack(combination + letter, nextDigits.slice(1));
    }
  }

  if (input_digit.length !== 0) {
    backtrack("", input_digit);
  }

  return combinations;
}

module.exports = letterCombinations;
