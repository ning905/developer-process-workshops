function reverseString(string, reverse = "") {
  if (string.length <= 1) {
    reverse += string;
    return reverse;
  } else {
    const thisLetter = string.slice(string.length - 1);
    reverse += thisLetter;
    const newString = string.slice(0, string.length - 1);
    return reverseString(newString, reverse);
  }
}

// console.log(reverseString("bacd"));
