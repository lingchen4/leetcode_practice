let unique = arr => {
  let ref = {};
  let result = [];
  arr.forEach(element => {
    if (ref[element]) {
      ref[element]++;
    } else {
      ref[element] = 1;
    }
  });
  console.log(ref);
  for (x in ref) {
    if (ref[x] == 1) {
      result.push(x);
    }
  }
  return result;
};

console.log(unique([1, 4, 5, 3, 2, 2, 2, 3, 4, 4]));
