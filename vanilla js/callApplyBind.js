Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a function");
  }
  // console.log(this, obj, args);
  obj.fn = this;
  return obj.fn(...args);
};

Function.prototype.myApply = function (obj = {}, args) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a function");
  }
  // console.log(this, obj, args);
  obj.fn = this;
  return obj.fn(...args);
};

Function.prototype.myBind = function (obj = {}) {
  if (typeof this !== "function") {
    throw new Error(this + " is not a function");
  }
  obj.fn = this;
  return function (...args) {
    return obj.fn(...args);
  };
};

let person = {
  name: "Abhishek",
  age: 22,
};

function getIntro(greeting) {
  //   console.log(greeting, this);
  return `${greeting} ${this.name}, you are ${this.age} years old.`;
}

console.log(getIntro.call(person, "Hi"));
console.log(getIntro.myCall(person, "Hi"));
console.log(getIntro.apply(person, ["Hello"]));
console.log(getIntro.myApply(person, ["Hello"]));
console.log(getIntro.bind(person)("Hey"));
console.log(getIntro.myBind(person)("Hey"));
console.log(getIntro("Oi"));
