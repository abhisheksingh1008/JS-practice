// alert(positiveNegative(59));

function reverseString(s) {
  let len = s.length,
    res = "";
  // alert(s);

  for (let i = len - 1; i >= 0; i--) {
    res += s[i];
  }
  return res;
}

function positiveNegative(n) {
  if (n > 0) return "positive";
  else if (n < 0) return "negative";
  else return "zero";
}

function oddEven(n) {
  if (n % 2 == 0) return "even";
  else return "odd";
}

function sumOfFirstN(n) {
  let sum = 0;
  while (n) {
    sum += n;
    n--;
  }
  return sum;
}

function sumOfRange(a, b) {
  let sum = 0;
  while (a <= b) {
    sum += a;
    a++;
  }
  return sum;
}

function greatestOfTwo(a, b) {
  return (ans = a >= b ? a : b);
}

function greatestOfThree(a, b, c) {
  let ans = a >= b ? a : b;
  ans = ans >= c ? ans : c;

  return ans;
}

function isPrime(n) {
  for (let i = 2; i < n / 2; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

function primeInRange(a, b) {
  let ans = [];
  let isPrime = true;
  for (let i = a; i <= b; i++) {
    isPrime = true;
    for (let j = 2; j < i / 2; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) ans.push(i);
  }
  return ans;
}

function sumOflen(n) {
  let res = 0;
  while (n) {
    let mod = n % 10;
    res += mod;
    n = Math.floor(n / 10);
  }
  return res;
}

function reverseNumber(n) {
  let res = 0;
  while (n) {
    res *= 10;
    res += n % 10;
    n = Math.floor(n / 10);
  }
  return res;
}

function palindromeNumber(n) {
  if (n == reverseNumber(n)) return true;
  return false;
}

function length(n) {
  let x = n;
  let len = 0;
  while (x) {
    x = Math.floor(x / 10);
    len++;
  }
  return len;
}

function armstrongNumber(n) {
  let sum = 0,
    x = n,
    len = length(n);
  while (x) {
    sum += (x % 10) ** len;
    x = Math.floor(x / 10);
  }

  if (sum == n) return true;
  return false;
}

function armstrongNumberInRange(lo, hi) {
  let ans = [];
  for (let num = lo; num <= hi; num++) {
    if (armstrongNumber(num)) ans.push(num);
  }
  return ans;
}

function NthFib(n, arr) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (arr[n] != undefined) return arr[n];

  return (arr[n] = NthFib(n - 1, arr) + NthFib(n - 2, arr));
}

function fibTillN(n, arr) {
  NthFib(n, arr);
  return arr;
}

function fact(n) {
  var arr = new Array(n + 1);
  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = i * arr[i - 1];
  }
  return arr[n];
}

function factTIllN(n) {
  var arr = new Array(n + 1);
  arr[0] = 1;
  arr[1] = 1;

  for (let i = 2; i <= n; i++) {
    arr[i] = i * arr[i - 1];
  }

  return arr;
}

function strongNumber(n) {
  let x = n,
    ans = 0;

  while (x) {
    let rem = x % 10;
    ans += fact(rem);
    x = Math.floor(x / 10);
  }

  if (ans == n) return true;
  return false;
}

function perfectNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n / 2 + 1; i++) {
    if (n % i == 0) sum += i;
  }

  if (sum == n) return true;
  return false;
}

function perfectSquare(n) {
  let x = Math.sqrt(n);
  if (x * x == n) return true;
  return false;
}

function automorphicNumber(n) {
  let len = length(n),
    newNum = 0;
  let sqr = n * n;
  while (len) {
    newNum *= 10;
    newNum += sqr % 10;
    sqr = Math.floor(sqr / 10);
    len--;
  }
  newNum = reverseNumber(newNum);

  if (newNum == n) return true;
  return false;
}

function harshadNumber(n) {
  let sumOfDigits = 0,
    x = n;
  while (x) {
    sumOfDigits += x % 10;
    x = Math.floor(x / 10);
  }
  if (n % sumOfDigits == 0) return true;
  return false;
}

function abundantNumber(n) {
  let sumOfDivisors = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i == 0) sumOfDivisors += i;
  }
  if (sumOfDivisors > n) return true;
  return false;
}

console.log(friendlyPair(6, 28));

function friendlyPair(a, b) {
  let sumOfDivisorsOfA = 0,
    sumOfDivisorsOfB = 0;

  for (let i = 1; i <= a / 2; i++) {
    if (a % i == 0) sumOfDivisorsOfA += i;
  }
  for (let j = 1; j <= b / 2; j++) {
    if (b % j == 0) sumOfDivisorsOfB += j;
  }

  let x = Math.floor(a / sumOfDivisorsOfA);
  let y = Math.floor(b / sumOfDivisorsOfB);

  if (x == y) return true;
  return false;
}
