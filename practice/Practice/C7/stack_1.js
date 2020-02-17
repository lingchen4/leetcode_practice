export default arr => {
  let result = [];
  let pre1, pre2;

  arr.forEach(element => {
    switch (element) {
      case "C":
        if (result.length) {
          result.pop();
        }
        break;
      case "D":
        pre1 = result.pop();
        result.push(pre1, pre1 * 2);
        break;
      case "+":
        pre1 = result.pop();
        pre2 = result.pop();
        result.push(pre2, pre1, pre2 + pre1);
        break;
      default:
        result.push(element * 1);
    }
  });

  return result.reduce((total, num) => {
    return total + num;
  });
};
