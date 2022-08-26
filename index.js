function hasTargetSum(array, target) {
  const seenNumbers = {};
  for (const number of array){
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  Runstime: O(n*2)
  Space: O(n)
*/

/* 
  Add your pseudocode here
  Create an object to store numbers we've already seen
  iterate through each number in the array
  for the current number, identify a comlement that completes the sum
  check if any key in our object is the complement, if so,
  return true
  otherwise, add that number to the object
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
