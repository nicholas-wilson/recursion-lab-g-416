// Code your solution here!

function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    const substring = string.substring(1, string.length)
    printString(substring)
  }
}

// reverse a string
function reverseString(string) {
  let reverse = '';
  if (string.length >= 1){
    const substring = string.substring(0, string.length - 1)
    reverse = string[string.length - 1] + reverseString(substring)
  }
  return reverse;
}

function isPalindrome(string) {
  let boolean = false;
  if (string[0] === string[string.length - 1]) {
    if (string.length <= 1) {
      return true;
    } else {
       boolean = isPalindrome(string.substring(1, string.length - 1));
    }
  } else {
    boolean = false;
  }
  return boolean;
}

function addUpTo(array, index) {
  let total = 0;
  if (index >= 1) {
    total = array[index] + addUpTo(array, index - 1);
  } else {
    return 0;
  }
  return total;
}