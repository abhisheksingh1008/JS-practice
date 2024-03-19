let obj = {
  name: "Abhishek",
  lastname: "Singh",
  age: 22,
  print: function () {
    console.log(
      this,
      `\nMy name is ${this.name} ${this.lastname} and my age is ${this.age}`
    );
  },
  printArrow: function () {
    const that = this;
    function innerfunc() {
      // console.log(this);
      console.log(
        this,
        `\nMy name is ${that.name} ${that.lastname} and my age is ${that.age}`
      );
    }
    innerfunc();
    setTimeout(() => {
      console.log(
        this,
        `\nMy name is ${this.name} ${this.lastname} and my age is ${this.age}`
      );
    }, 0);
  },
  printArrow2: () => {
    console.log(
      this,
      `\nMy name is ${this.name} ${this.lastname} and my age is ${this.age}`
    );
  },
  // [Symbol.toPrimitive](hint) {
  //     if(hint == 'string') {
  //         return this.age;
  //     }
  //     else {
  //         return this.name;
  //     }
  // },
  // toString() {
  //     return `My name is ${this.name} ${this.lastname} and my age is ${this.age}`;
  // },
  valueOf() {
    return this.age;
  },
};

// Symbol.toPrimitive:
// toString()
// valueOf()

// let x = Number(obj);
// console.log(x);

// obj.print();
// obj.printArrow();

// let styles = ['Jazz', 'Blues'];
// styles.push('Rick-n-Roll');
// console.log(styles);

// styles[Math.floor(styles.length/2)] = 'Classics';
// console.log(styles);

// console.log(styles.shift());

// styles.unshift('Rap', 'Reggae');
// console.log(styles);

// console.log(styles.at(-1));

// styles.splice(0, 0, 'Jazz');
// console.log(styles);

// styles.splice(-1, 0, 'Pop', 'Hip-Hop');
// console.log(styles);

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
  { id: 5, name: "Mary" },
  { id: 6, name: "John" },
];

let user = users.filter((item) => {
  return item.name == "John";
});

// for(let x of user) {
//     console.log(x.id, x.name);
// }

function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

console.log(camelize("background-color"));
console.log(camelize("background-margin"));
console.log(camelize("this-is-going-to-be-camel-case"));

// FLATTEN ARRAY WITH CUSTOM DEPTH :
const flatten = (arr, depth = 1) => {
  if (depth === 0) return arr;
  let result = [];
  for (elem of arr) {
    if (Array.isArray(elem)) {
      result.push(...flatten(elem, depth - 1));
    } else {
      result.push(elem);
    }
  }
  return result;
};

let arr = [1, [2, 3, 4], 5, 6, [7]],
  arr2 = [1, [2, 3, 4], 5, 6, [7, [8, 9, 10, [11]]]],
  arr3 = [1, 2, 78, 13, 39, 78, 41];

// console.log(arr);
// console.log(arr2);
// console.log(flatten(arr, 1));
// console.log(flatten(arr2, 2));
// console.log(flatten(arr2, 3));

// SHIFT AND UNSHIFT :
// arr3.shift();
// console.log(arr3);
// arr3.unshift(11, 88, 72);
// console.log(arr3);

// SLICE AND SPLICE :
// let tmp;
// tmp = arr3.slice(2, 4);
// console.log(arr3, tmp);
// console.log(arr3);
// tmp = arr3.splice(3, 2);
// console.log(arr3, tmp);

// CONCAT : rerurns new array
// let newArr = arr3.concat(17, 38, 33);
// console.log(arr3, newArr);

// INCLUDES :
// console.log(arr3.includes(99));

// INDEXOF AND LASTINDEXOF :
// console.log(arr3.indexOf(78));
// console.log(arr3.lastIndexOf(78));

// FINDINDEX AND FINDLASTINDEX : good for finding index of an object
// console.log(arr3.findIndex((item) => item === 78));
// console.log(arr3.findLastIndex((item) => item === 78));

// FIND :
// let x = arr3.find((item) => item === 78);
// console.log(x);

// MAP :
// let x = arr3.map((item) => item === 78);
// console.log(x);

// FILTER :
// let x = arr3.filter((item) => item > 13 && item !== 41);
// console.log(arr3, x);

// REDUCE :
// let x = arr3.reduce((acc, currItem) => acc + currItem, 0);
// console.log(arr3, x);

////////////////////  *** STRINGS *** ////////////////////////
let str = "abhishekk singgghhh";

// substr:
// console.log(str.substr(4, 11), str);

// slice
// console.log(str.slice(4), str);
// console.log(str.slice(4, 7), str);

//////////////////////// ** SCOPE ** ////////////////////////

function a(num) {
  console.log(num, x);
  {
    var x = num;
    function b() {
      console.log(num + x);
    }
  }
  b();
  console.log(x, num, num + x);
}

// a(12);
