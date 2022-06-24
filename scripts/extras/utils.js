import { animatePopup } from "../animations";
import { store } from "../redux/store";
export default class AddToolTip {
  constructor(elements) {
    this.elements = [...elements];
    this.container = document.createElement("div");
  }
  addToolTip() {
    console.log(this.elements);
    this.elements.forEach((elem) => {
      console.log(elem);
      elem.addEventListner("click", this.showToolTip);
    });
  }
  showToolTip(e) {
    console.log(e);
  }
}

//this function adds an svg loader while firebase validates or creates a user
export function addSvgLoader() {
  let button = document.querySelector(".submit");
  button.style.backgroundColor = "black";
  console.log(button);
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  width="70px" height="70px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <defs>
    <filter id="ldio-3i01508gpyj-filter" x="-100%" y="-100%" width="300%" height="300%" color-interpolation-filters="sRGB">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
      <feComponentTransfer result="cutoff">
        <feFuncA type="table" tableValues="0 0 0 0 0 0 1 1 1 1 1"></feFuncA>
      </feComponentTransfer>
    </filter>
  </defs>
  <g filter="url(#ldio-3i01508gpyj-filter)"><g transform="translate(50 50)">
  <g>
    <circle cx="15" cy="0" r="5" fill="#823200">
      <animate attributeName="r" keyTimes="0;0.5;1" values="3;7;3" dur="2.2222222222222223s" repeatCount="indefinite" begin="-0.45s"></animate>
    </circle>
    <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="2.2222222222222223s" repeatCount="indefinite" begin="0s"></animateTransform>
  </g>
  </g><g transform="translate(50 50)">
  <g>
    <circle cx="15" cy="0" r="5" fill="#edb870">
      <animate attributeName="r" keyTimes="0;0.5;1" values="3;7;3" dur="1.1111111111111112s" repeatCount="indefinite" begin="-0.36s"></animate>
    </circle>
    <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="1.1111111111111112s" repeatCount="indefinite" begin="-0.09s"></animateTransform>
  </g>
  </g><g transform="translate(50 50)">
  <g>
    <circle cx="15" cy="0" r="5" fill="#fcc029">
      <animate attributeName="r" keyTimes="0;0.5;1" values="3;7;3" dur="0.7407407407407407s" repeatCount="indefinite" begin="-0.27s"></animate>
    </circle>
    <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="0.7407407407407407s" repeatCount="indefinite" begin="-0.18s"></animateTransform>
  </g>
  </g><g transform="translate(50 50)">
  <g>
    <circle cx="15" cy="0" r="5" fill="#7cafc4">
      <animate attributeName="r" keyTimes="0;0.5;1" values="3;7;3" dur="0.5555555555555556s" repeatCount="indefinite" begin="-0.18s"></animate>
    </circle>
    <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="0.5555555555555556s" repeatCount="indefinite" begin="-0.27s"></animateTransform>
  </g>
  </g><g transform="translate(50 50)">
  <g>
    <circle cx="15" cy="0" r="5" fill="#06080a">
      <animate attributeName="r" keyTimes="0;0.5;1" values="3;7;3" dur="0.4444444444444444s" repeatCount="indefinite" begin="-0.09s"></animate>
    </circle>
    <animateTransform attributeName="transform" type="rotate" keyTimes="0;1" values="0;360" dur="0.4444444444444444s" repeatCount="indefinite" begin="-0.36s"></animateTransform>
  </g>
  </g></g>
  </svg>`;

  //remove the yellow hover style
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "black";
  });
  button.innerHTML = svg;
  button.disabled = true;
}
export function removeSvgLoader() {
  let button = document.querySelector(".submit");
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#FCC029";
  });
  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "black";
  });
  button.disabled = false;
  button.innerHTML = `${button.accessKey}`;
  // button.innerText = "SIGN UP";
}

//show the users password as text when eye-icon is clicked
export function showPassword() {
  let passwordIcon = document.querySelector(".fa-eye-slash");
  let passwordInput = document.querySelector(".password_icon");
  console.log(passwordInput);
  passwordIcon.addEventListener("click", () => {
    if (passwordInput.type == "password") {
      passwordIcon.classList.remove("fa-eye-slash");
      passwordIcon.classList.add("fa-eye");
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
      passwordIcon.classList.remove("fa-eye");
      passwordIcon.classList.add("fa-eye-slash");
    }
  });
}

//show the modal if the openModal is true
store.subscribe(() => {
  let storeDetails = store.getState();
  let openPopup = storeDetails.auth.openModal;
  let openPopupParams = {
    message: storeDetails.auth.authMessage,
    status: storeDetails.auth.authStatus,
  };
  //show the popup if the openPopup
  //if the openModal property for the auth object is true
  openPopup && showPopup(openPopupParams);
});
store.subscribe(() => {
  let storeDetails = store.getState();
  let openPopup = storeDetails.alertMessage.openModal;
  console.log(openPopup);
  //create an object containing the parameters for the popup
  let openPopupParams = {
    message: storeDetails.alertMessage.message,
    status: storeDetails.alertMessage.status,
  };
  openPopup && showPopup(openPopupParams);
});
export function showPopup(popupDetails) {
  const popup = document.querySelector(".popup");
  console.log(popup);
  console.log(popupDetails.message);
  // remove'firebase error' from the error message
  let firebaseRegex = "Firebase: Error (auth/";
  // let authRegex = /auth/gi;
  let bracketsRegex = /[\])}[{(]/g;
  //store the message gotten from the redux store
  let message = popupDetails.message;
  // remove the firebase error string from the message
  let firebaseErrorRemoved = message.replace(firebaseRegex, "");
  // remove brackets from the message
  let bracketsRemoved = firebaseErrorRemoved.replace(bracketsRegex, "");
  popup.textContent = `${bracketsRemoved} `;
  animatePopup(popup, popupDetails.status);
}
