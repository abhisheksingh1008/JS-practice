function myfunction() {
  console.log("This is my first function");
  console.log("Hi my name is abhishek singh");

  let a = 11;
  let b = 10;
  console.log(a + b);

  return;
}

// main function here
// console.log("This is the main function");
// myfunction();

// let arr = [1, 2, 3, 4, 5];

// let x = arr.pop();
// arr.shift(12);
// for(elem of arr) {
//     console.log(elem);
// }

// console.log(arr, arr.slice(2, 4));
// console.log(arr, arr.concat());

let arr = [1, 2, 3, [4, 5, [6]], 7];

const customFlat = (array, depth = 1) => {
  if (depth === 0) return array;
  let newArr = [];
  for (elem of array) {
    if (Array.isArray(elem)) {
      newArr.push(...customFlat(elem, depth - 1));
    } else {
      newArr.push(elem);
    }
  }
  return newArr;
};

// console.log(customFlat(arr, 23));

function reverseEveryWord(sentence, separator) {
  return sentence.split(separator).reverse().join(separator);
}

let str = "Welcome to Javascrip Guide";
console.log(reverseEveryWord(reverseEveryWord(str, ""), " "));
