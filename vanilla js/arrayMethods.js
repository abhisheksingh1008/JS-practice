let arr = [1, 11, 22, 33];
// polyfill for push method for array
Array.prototype.myPush = function (...args) {
  if (!Array.isArray(this)) {
    console.log("No an array");
    return;
  }
  const len = this.length;
  for (let i = 0; i < args.length; i++) {
    this[len + i] = args[i];
  }
  this.length = len + args.length;
  return this.length;
};

Array.prototype.myMax = function () {
  if (this.length === 0) return 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < this.length; i++) {
    max = Math.max(max, this[i]);
  }
  return max;
};

arr.myPush(44, 55, 66);

console.log(arr);
console.log([1, 2, 3, 4, 5].myMax());

const a = arr.reduce((acc, elem, i) => {
  if (i % 2 == 0) {
    return acc + elem;
  } else {
    return acc - elem;
  }
}, 0);
console.log(a);
