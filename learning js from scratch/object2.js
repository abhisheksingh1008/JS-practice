let user = {
  name: "Rigid",
  id: 101,
  salary: 1000,
  // [Symbol.toPrimitive](hint) {
  //     if(hint=="string") return `{name : ${this.name}, id : ${this.id}}`;
  //     else return this.salary;
  // },
  toString() {
    return `{ok, name : ${this.name}, id : ${this.id}}`;
  },
  valueOf() {
    return this.salary + 1;
  },
};

// let id = Symbol('didi');

// user[id]=505;
// user[Symbol('id')] = 202;

// alert(user);
// alert(+user);
// console.log(101+user);
// console.log(user.toString());
// console.log(user.valueOf());

// Note :
/*The object to primitive conversion looks for [Symbol.toPrimitive] method property inside the object 
and also provides it with a hint ('string', 'number' or 'defaullt'). According to the hint it expects 
that function to return appropriate primitive value for e.g if a string operation needs to be 
performed on the object then obj.[Symbol.toPrimitive](hint){} should return a string but it does not
neccessarily have to. The only thing required is that it should only return a primitive value e.g
string or a number (not boolean because boolean operation on objects always return true even if the 
object is empty). Every object has toString() and valueOf() properties by default but they return 
nothing but they do exist. And if we describe our own toString() and valueOf() then the older versions 
will get overwritten. If obj.[Symbol.toPrimitive] property is not present then for string operation it 
then looks for toString() property inside the object and for numeric operations it looks for valueOf()
property. If [Symbol.toPrimitive] is present whereas toString() and valueOf() are not present and you 
call toString() or valueOf() on the object then it does not mean that javascript will call [Symbol.toPrimitive]
with hints string and number respectively. The toString() will return [object object] whereas valurOf() 
returns the object itself. If [Symbol.toPrimitive] is absent while toString() and valueOf() are present
then for string operations on the object, toString() will be called and for numeric operations valueOf()
will be called. 


**Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), 
if such method exists,
-Otherwise if hint is "string"
    try calling obj.toString() or obj.valueOf(), whatever exists.
-Otherwise if hint is "number" or "default"
    try calling obj.valueOf() or obj.toString(), whatever exists.


**If there’s no Symbol.toPrimitive then JavaScript tries to find methods toString and valueOf:
-For the "string" hint: call toString method, and if it doesn’t exist or if it returns an object 
    instead of a primitive value, then call valueOf (so toString has the priority for string conversions).
-For other hints: call valueOf, and if it doesn’t exist or if it returns an object instead of a 
    primitive value, then call toString (so valueOf has the priority for maths).

*/

function myNumbers() {
  let n = 0;
  return {
    next: function () {
      n += 10;
      return { value: n, done: false };
    },
  };
}

let n = myNumbers();
for (let i = 0; i < 12; i++) {
  console.log(n.next().value);
}
