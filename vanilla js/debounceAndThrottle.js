const counter = document.querySelector(".counter"),
  resetBtn = document.querySelector(".reset-counter"),
  incrementBtn = document.querySelector(".increment"),
  debouncedIncrementBtn = document.querySelector(".increment-debounce"),
  throttleBtn = document.querySelector(".throttle-button");

let count = 0;

function debounce(callback, delay = 400) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      return callback(...args);
    }, delay);
  };
}

function throttle(callback, delay = 1000) {
  let prev = 0;
  return function (...args) {
    let now = new Date().getTime();
    // console.log(now - prev);
    if (now - prev > delay) {
      prev = now;
      return callback(...args);
    }
  };
}

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.innerHTML = count;
});

incrementBtn.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
});

const debouncedFunction = debounce((first, second) => {
  count++;
  counter.innerHTML = count;
  // console.log(first, second);
});

debouncedIncrementBtn.addEventListener("click", () => {
  debouncedFunction(11, 33);
});

const throttledFunction = throttle(() => {
  console.log("Throttle button was clicked!");
});

throttleBtn.addEventListener("click", () => {
  throttledFunction();
});
