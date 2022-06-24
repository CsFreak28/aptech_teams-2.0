// import validate user form
import validateUser from "./auth/validate";
import { removeSvgLoader } from "./extras/utils";
// import utils js
//a test button in the dom, for test functions

import { showPassword } from "./extras/utils";
showPassword();

let button = document.querySelector(".submit");
// console.log(divvv)
console.log(button);
button.addEventListener("click", (e) => {
  validateUser(e, button.accessKey);
});
