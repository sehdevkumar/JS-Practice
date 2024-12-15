Array.prototype.ownMap = function (callback) {
  const arr = this; // Reference to the array
  const result = []; // To store the mapped results

  for (let index = 0; index < arr.length; index++) {
    // Apply the callback to each element and push the result to the new array
    result.push(callback(arr[index], index, arr));
  }

  return result; // Return the new array
};

// Example usage
const arr = [1, 2, 3, 4, 5];

const mapList = arr.ownMap((d, i) => {
  if (d === 5) {
    return true;
  }
  return d * 2; // Double the value otherwise
});

console.log(mapList); // Output: [2, 4, 6, 8, true]
