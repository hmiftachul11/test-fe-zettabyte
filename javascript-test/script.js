// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  const sortedInput = input.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedInput.length / 2);

  if (sortedInput.length % 2 === 0) {
    return (sortedInput[middleIndex - 1] + sortedInput[middleIndex]) / 2;
  } else {
    return sortedInput[middleIndex];
  }
}

console.log(result(input)); // Output: 7

