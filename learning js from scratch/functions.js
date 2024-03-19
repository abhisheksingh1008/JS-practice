// passing functions as parameters to a function

function sayHi(userName) {
  alert(`Hi, ${userName}`);
}

function canceled() {
  alert("You canceled the operation");
}

function newFunc(userName, fun1, fun2) {
  if (confirm("Are you the Admin?")) {
    fun1(userName);
  } else fun2();
}

let userName = prompt("Enter your name", "");

newFunc(userName, sayHi, canceled);
