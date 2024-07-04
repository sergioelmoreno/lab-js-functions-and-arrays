// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1
  } else if (num1 < num2) {
    return num2
  } else {
    return num1, num2
  }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
function findLongestWord(arrOfWords) {
  let longestWord = ""

  if (arrOfWords.length === 0) {
    return null
  } else if (arrOfWords.length === 1) {
    return arrOfWords[0]
  }

  arrOfWords.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  })

  return longestWord

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(nums1) {
  let sum = 0
  if (nums1.length === 0) {
    return 0
  } else if (nums1.length === 1) {
    return nums1[0]
  }
  nums1.forEach(number => sum = number + sum)
  return sum
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(nums2) {
  if (nums2.length === 0) {
    return 0
  }
  const sumOfNumbers = sumNumbers(nums2)
  return sumOfNumbers / nums2.length
}





// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrWords, filter) {
  if (arrWords.length === 0) {
    return null
  } else if (arrWords.includes(filter)) {
    return true
  } else {
    return false
  }

}
