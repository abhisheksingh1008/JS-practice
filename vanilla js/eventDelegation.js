const div = document.querySelector(".eventDelgation"),
  form = document.querySelector(".form"),
  btn = document.querySelector(".button");

function func(e) {
  alert(e.currentTarget.tagName);
}

div.addEventListener("click", (e) => {
  alert("div");
});

form.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    alert("form");
  },
  { capture: true }
);

btn.addEventListener("click", (e) => {
  // e.stopPropagation();
  alert("button");
});
