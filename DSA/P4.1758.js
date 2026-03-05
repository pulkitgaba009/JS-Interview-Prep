var minOperations = function (s) {
  const firstChar = s[0];
  let arr = s.split("");
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (firstChar === '0') {
      if (arr[i] === arr[i + 1]) {
        arr[i + 1] = '1';
        count++;
      }

      if (s.length > 2) {
        if (arr[i + 2] !== '0') {
          arr[i + 2] = '0';
          count++;
        }
      }
    }

    if (firstChar === '1') {
      if (arr[i] === arr[i + 1]) {
        arr[i + 1] = '0';
        count++;
      }

      if (s.length > 2) {
        if (arr[i + 2] !== '1'
        ) {
          arr[i + 2] = '1';
          count++;
        }
      }
    }
  }

  return count
};

console.log(minOperations("0100"));
// minOperations("10");
// minOperations("1111");
