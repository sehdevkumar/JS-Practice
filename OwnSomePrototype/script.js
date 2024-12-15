Array.prototype.ownSome = function (callback) {
  const arr = this; // Reference to the array
  let isAnyTrue = false;
  for (let index = 0; index < arr.length; index++) {
    // Apply the callback to each element and push the result to the new array
       const isTrue = callback(arr[index], index, arr)
       if(typeof isTrue === "boolean" && isTrue) {
          isAnyTrue= true
          break;
       }
  }
  return isAnyTrue; // Return the new array
};

const arr = [1, 2, 3, 4, 5];
const result = arr.ownSome((d) => d < 10);
console.log(result); // Output: false
