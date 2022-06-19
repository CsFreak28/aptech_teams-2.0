import signUpAndCreateUser from "./signUp";
import { addSvgLoader } from "../extras/utils";

export default function validateUser(e,typeOfAuthentication) {
  console.log("validate user was clicked");
  e.preventDefault();
  const extractedValues = extractInputValue();
  console.log(extractedValues);
  extractedValues && addSvgLoader();
  extractedValues && signUpAndCreateUser(extractedValues,typeOfAuthentication);
}

function extractInputValue() {
  // intializing form values and span values
  let form = document.querySelector(".input");
  let span = document.querySelectorAll("span");
  let userInfo = {};
  let empty = false;

  // check for empty input and puts non empty inputs in the userInfo object
  for (let inputElement of form) {
    if (inputElement.value == "" && inputElement.tagName == "INPUT") {
      span.forEach((message) => {
        if (inputElement.name == message.id) {
          message.innerText = `Please enter a valid ${inputElement.name}`;
          setTimeout(() => {
            message.childNodes[0].remove();
          }, 2000);
        }
        empty = true;
      });
    } else {
      //add value to the USERINFO object if the input has a value.
      if (inputElement.tagName == "INPUT") {
        userInfo[inputElement.name] = inputElement.value;
      }
    }
  }

  return empty ? null : userInfo;
}
