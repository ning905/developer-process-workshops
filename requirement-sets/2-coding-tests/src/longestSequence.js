function longestSequence(str) {
  let longestSequence = { a: 0 };
  let currentSequence = {};

  for (let i = 0; i < str.length - 1; i++) {
    let currentLetter = str[i];
    if (!currentSequence[currentLetter]) {
      currentSequence = {};
      currentSequence[currentLetter] = 1;
    }
    console.log(currentSequence);

    if (currentLetter === str[i + 1]) {
      currentSequence[currentLetter] += 1;
    } else {
      if (
        Object.values(currentSequence)[0] > Object.values(longestSequence)[0]
      ) {
        longestSequence = { ...currentSequence };
      } else if (
        Object.values(currentSequence)[0] === Object.values(longestSequence)[0]
      ) {
        if (Object.keys(currentSequence)[0] < Object.keys(longestSequence)[0]) {
          longestSequence = { ...currentSequence };
        }
      }
    }
  }

  return longestSequence;
}

console.log("result: ", longestSequence("aabbbbbpppbbb"));
