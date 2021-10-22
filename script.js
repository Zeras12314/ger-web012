const btn = document.querySelector("#next");
const input = document.querySelector(".address");
const message = document.querySelector("#message");
const email = document.querySelector(".email");
const error = document.querySelector(".error");
const pattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// btn.onclick = function () {
//   let value = input.value;
//   if (value.length === 0) {
//     message.innerHTML = "Please provide a valid email";
//     email.style.border = "2px solid hsl(0, 93%, 68%)";

//     error.style.visibility = "visible";
//   } else {
//     console.log(value);
//     message.innerHTML = "";
//     error.style.visibility = "hidden";
//     alert("Success! Email has been submitted.🤣");
//     email.style.border = "1px solid hsl(0, 93%, 68%)";
//   }

//   input.value = "";
// };

(window.onload = input.value = ""), (error.style.visibility = "hidden");

btn.onclick = function () {
  let value = input.value;
  if (value.match(pattern)) {
    alert("Success! Email has been submitted.🤣");
    message.style.color = "Red";
    message.innerHTML = null;
    input.value = "";
  } else {
    message.innerHTML = "Please provide a valid email.";
  }
};

email.onkeydown = function () {
  let value = input.value;
  if (value.match(pattern)) {
    message.innerHTML = "Your email address is valid.";
    error.style.visibility = "hidden";

    message.style.color = "Green";
  } else {
    message.innerHTML = "Please provide a valid email";
    email.style.border = "2px solid hsl(0, 93%, 68%)";

    error.style.visibility = "visible";
  }
};
