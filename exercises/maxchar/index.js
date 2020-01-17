// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charObj = {}
  for (let char of str){
    if (!charObj[char]){
      charObj[char] = 1
    } 
    else {
      charObj[char]++
    }
  }
  // IFFFFFFFF the value of this key is greater than the max char value, 
  // then return that value
  // {'a': 1, 1: 6, 'c': 1}
  let maxVal = 1
  let maxKey = 'a'
  for (let key in charObj){
    if (maxVal < charObj[key]){
      maxVal = charObj[key]
      maxKey = key
    }
  }
  return maxKey
}


module.exports = maxChar;
