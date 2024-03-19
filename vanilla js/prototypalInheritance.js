let obj = {};

let key = prompt("What's the key?", "__proto__");
obj[key] = "some value";

alert(obj[key]);
console.log(obj);

let obj1 = {
    fname: "Abhishek",
    lname: "Singh",
    city: "Mumbai",
    getIntro: function () {
      return `Hello ${this.fname} ${this.lname} from ${this.city}`;
    },
    addNewProperty: function (key, value) {
      this[key] = value;
    },
  },
  obj2 = {
    fname: "Ayush",
    city: "Navi Mumbai",
  };

// console.log(obj1.__proto__, obj2.__proto__);
