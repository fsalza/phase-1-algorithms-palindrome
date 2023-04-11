function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split("").reverse().join("");
  return word === reversed
}

isPalindrome("racecar")
isPalindrome("robot")
isPalindrome("chicken")
isPalindrome("radar")

/* if a word can be read the same backwards and forwards, return true. if not, return false.
  Add your pseudocode here
// initialize a variable called word
// if word is a isPalindrome, return true
// if word is not a palindrome, retiurn false


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("chicken"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("radar"))
}

module.exports = isPalindrome;
