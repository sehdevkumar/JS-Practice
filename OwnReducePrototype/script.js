Array.prototype.customReduce = function (callback, initialize) {
  const arr = this;
  let accumulator;
  let startIndex = 0;

  if (initialize !== undefined) {
    accumulator = initialize;
  } else {
    // Use the first element as the initial value if no `initialize` is provided
    if (arr.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = arr[0];
    startIndex = 1; // Start from the second element
  }

  for (let index = startIndex; index < arr.length; index++) {
    accumulator = callback(accumulator, arr[index]);
  }

  return accumulator;
};

// Test case
const result = [1, 2, 3, 4].customReduce((acc, val) => acc + val, 0);
console.log(result); // Output: 10
