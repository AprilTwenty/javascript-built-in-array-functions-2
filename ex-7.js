function isPalindrome(string) {
  // Start coding here
  
  let revert = string.split('');
  revert = revert.reverse();
  revert = revert.join('');
  return revert === string;
  
  //let revert = string.split('').reverse().join('');
  //return revert === string;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false