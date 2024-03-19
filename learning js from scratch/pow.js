let calculatePow = function (num, pow) {
  let ans = 1;

  for (let i = 0; i < pow; i++) {
    ans *= num;
  }

  return ans;
};

// let abc = calculatePow;
// let a = abc;

let num = +prompt("Enter an integer", "");

if (num <= 0) {
  alert("Enter a valid number!");
} else {
  let power = +prompt("Enter the power", "");
  if (power < 0) alert("Enter a valid number");
  else {
    let res = calculatePow(num, power);
    alert(`The answer is ${res}`);
  }
}
