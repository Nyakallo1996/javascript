let output = document.querySelector(".output");
let emailVal = document.querySelector("input");
let btn = document.querySelector("button");
let emailExp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
btn.addEventListener("click", (e) => {
  let val = emailVal.value;
  let result = emailExp.test(val);
  let response = "";
  if (!result) {
    response = "Invalid Email";
    output.style.color = "red";
  } else {
    response = "Valid Email";
    output.style.color = "green";
  }
  emailVal.value = "";
  output.textContent = response;
});
