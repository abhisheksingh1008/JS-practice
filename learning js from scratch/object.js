// 'use strict'

function sayHi() {
  console.log("Hi, " + this.name);
  console.log(
    "Hi, " + this.surname + " your function goes like \n" + this.func
  );
}

let user = { name: "John", surname: "Smith", func: null };
let admin = { name: "Admin", surname: "NA" };

user.func = sayHi;
admin.func = sayHi;

// user.func();
// admin.func();
// sayHi();
// console.log(this.name);

let user1 = {
  name: "Admin",
  salary: 90,
  gm: "btc",
  func1: function () {
    return {
      name: "John",
      surname: "Doe",
      age: 22,
      ref: this,
    };
  },
};

let obj = user1.func1();

// console.log(obj.ref.salary);

let calculator = {
  read: function () {
    calculator.a = +prompt("Enter first number", 0);
    calculator.b = +prompt("Enter second number", 0);
  },
  sum: function () {
    return this.a + this.b;
  },
  mul: function () {
    return this.a * this.b;
  },
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};

// ladder.up().up().down().showStep().down().showStep();

function NewUser(name, age) {
  this.name = name;
  this.age = age;
  return age + 10;
}

function newUser(name, age) {
  this.name = name;
  this.age = age;
  return age * 10;
}

// let User = NewUser('Jack', 35);
// console.log(User);
// User = new newUser('Harlow', 38);
// console.log(User);

let ob = {};

function A() {
  return ob;
}

function B() {
  return ob;
}

let x = new A();
let y = new B();

// console.log(x==y);

function Calc() {
  this.a = 0;
  this.b = 0;
  this.read = function () {
    this.a = +prompt("Enter first number", 0);
    this.b = +prompt("Enter second number", 0);
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

// let calcu = new Calc();
// let calcu2 = Calc();
// console.log(calcu2);
// calcu.read();
// console.log(calcu.sum());
// console.log(calcu.mul());

function Accumulator(startingValue) {
  this.value = startingValue ?? 0;
  this.read = function () {
    this.value += +prompt("New value?", 0);
    return this;
  };
  this.show = function () {
    console.log(this.value);
    return this;
  };
}

// let acc = new Accumulator();
// acc.read().read().show().read().show();

function User(name, surname, DOB) {
  this.name = name;
  this.surname = surname;
  this.DOB = DOB;
}

function MyCart(itemId, itemName, quantity) {
  this.itemId = itemId;
  this.itemName = itemName;
  this.quantity = quantity;
}

function MyOrders(
  itemId,
  itemName,
  quantity,
  orderId,
  paymentMode,
  paymentDone,
  shippingDate
) {
  this.itemId = itemId;
  this.itemName = itemName;
  this.quantity = quantity;
  this.orderId = orderId;
  this.paymentMode = paymentMode;
  this.paymentDone = paymentDone;
  this.shippingDate = shippingDate;
}

function MyAddress(
  flatNumber,
  AptName,
  streetName,
  area,
  cityName,
  pincode,
  state
) {
  this.flatNumber = flatNumber;
  this.AptName = AptName;
  this.streetName = streetName;
  this.area = area;
  this.cityName = cityName;
  this.pincode = pincode;
  this.state = state;
}

function CreateObjectOfAnyType(constructorFunction, ...args) {
  let resultObj = { __constructorFunction: constructorFunction };
  resultObj.__constructorFunction(...args);

  delete resultObj.__constructorFunction;
  return resultObj;
}

// let user11 = CreateObjectOfAnyType(User, 'John', 'Smith', '10/05/2001');
// let cartItem = CreateObjectOfAnyType(MyCart, 101853, 'Kenz soap', 3);
// let user22 = new User('Anket', 'Habib', 24);
// console.log(user11);
// console.log(cartItem);

function abcd(d, e) {
  return this.a + this.b + this.c + d + e;
}

let xx = {
  c: 30,
  fun: abcd,
  b: 20,
  a: 10,
};

// console.log(xx.fun(40, 50));
// console.log(xx);
// for(let key in xx) {
//     console.log(key + ' : ' + xx[key]);
// }
console.log(xx.address?.pincode);
console.log(xx.fun?.(40, 50));
// delete xx.address?.street;
