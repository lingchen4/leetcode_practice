var isValid = function(s) {
  let valid = true;
  const stack = [];
  const mapper = {
    "{": "}",
    "[": "]",
    "(": ")"
  };

  for (let i in s) {
    const v = s[i];
    if (["(", "[", "{"].indexOf(v) > -1) {
      stack.push(v);
    } else {
      const peak = stack.pop();
      if (v !== mapper[peak]) {
        return false;
      }
    }
  }
  if (stack.length > 0) return false;

  return valid;
};

// function isValid(str) {
//   let match = {
//     "{": "}",
//     "[": "]",
//     "(": ")"
//   };

//   let result = [];
//   str = str.split("");
//   str.forEach(element => {
//     if (["{", "[", "("].indexOf(element) > -1) {
//       result.push(element);
//     } else {
//       const x = result.pop();
//       if (match[x] !== element) {
//         result.push(x);
//         return false;
//       }
//     }
//   });

//   if (result.length > 0) {
//     return false;
//   }
//   return true;
// }

console.log(isValid("([]]"));
console.log(isValid("{[]}"));
