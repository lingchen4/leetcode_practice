function removeDuplicate(arr) {
  let result = [];
  arr.forEach(element => {
    if (result.indexOf(element) == -1) {
      result.push(element);
    }
  });
  console.log(result);
  return result.length;
}

console.log(removeDuplicate([1, 1, 2, 2, 3]));
