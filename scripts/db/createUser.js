import { db } from "../firebase.config";
import { setDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
export async function createUser(userInfo, formValues) {
  await setDoc(doc(db, "users", userInfo.user.uid), {
    firstName: formValues.firstname,
    lastName: formValues.lastname,
    email: formValues.email,
    currentTeam: false,
    teamLeader: false,
    currentTeam: null,
    phoneNumber: null,
    profilePictureRef: null,
  });
}
