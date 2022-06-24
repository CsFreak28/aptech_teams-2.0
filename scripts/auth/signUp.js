import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { createUser } from "../db/createUser";
import { removeSvgLoader } from "../extras/utils";
import { store } from "../redux/store";
import { sendEmailVerification } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
//signs up the user with the user's email and password.
export default function Authenticate(values, typeofAuthentication) {
  console.log(getSession());
  console.log(typeofAuthentication);
  if (getSession()) {
    if (typeofAuthentication == "Sign Up") {
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((user) => {
          sendEmailVerification(user.user).then(() => {
            console.log("email has been sent");
          });
          createUser(user, values)
            .then(() => {
              removeSvgLoader();
              store.dispatch({
                type: "updateAuthStatusAndMessage",
                authStatus: true,
                message: "Authentication was sucessful",
                typeOfAuth: typeofAuthentication,
              });
              updateSession(user.user.uid);
            })
            .catch((e) => {
              removeSvgLoader();
              console.log(e);
              store.dispatch({
                type: "updateAuthStatusAndMessage",
                authStatus: false,
                message: e.message,
                typeOfAuth: typeofAuthentication,
              });
            });
        })
        .catch((e) => {
          removeSvgLoader();
          console.log(e.email);
          store.dispatch({
            type: "updateAuthStatusAndMessage",
            authStatus: false,
            message: e.message,
            typeOfAuth: typeofAuthentication,
          });
        });
    } else if (typeofAuthentication == "Log In") {
      getSession();
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((user) => {
          console.log(user);
          removeSvgLoader();
          store.dispatch({
            type: "updateAuthStatusAndMessage",
            authStatus: true,
            message: "Authentication was sucessful",
            typeOfAuth: typeofAuthentication,
          });
          updateSession(user.user.uid)
        })
        .catch((e) => {
          console.log(e.code);
          removeSvgLoader();
          store.dispatch({
            type: "updateAuthStatusAndMessage",
            authStatus: false,
            message: e.message,
            typeOfAuth: typeofAuthentication,
          });
        });
    }
  } else if (!getSession()) {
    removeSvgLoader();
    store.dispatch({
      type:'userAlreadySignedIn',
      alertMessage:'an account is already logged In...'
    });
  }
}

function getSession() {
  //return a boolean representing if a user has logged in
  return sessionStorage.getItem("auth") == null;
}

function updateSession(userId) {
  //add a user's id to the session storage.
  return sessionStorage.setItem("auth", userId);
}
