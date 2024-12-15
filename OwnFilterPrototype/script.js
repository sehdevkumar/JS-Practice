Array.prototype.ownFilter = function (callback) {
  let arr = this;
  let isMatched = false;
  let filterlist = [];
  for (let index = 0; index < arr.length; index++) {
    isMatched = callback(arr[index], index);

    if (isMatched) {
      filterlist.push(arr[index]);
    }
  }

  return filterlist;
};

const arr = [1, 2, 3, 4, 5, 5];

const filterlist = arr?.ownFilter((d, i) => {
  if (d === 5) {
    return true;
  }
});

console.log(filterlist);
