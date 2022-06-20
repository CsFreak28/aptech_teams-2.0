import { createStore } from "redux";
// we use redux to manage the state of the entire application and several functions
const applicationIntialState = {
  //save auth state and messages.
  auth: {
    authMessage: {},
    authStatus: {},
  },
};
function applicationReducer(state = { applicationIntialState }, action) {
  switch (action.type) {
    case hello:
      return { auth: "he is logged in" };
    default:
      return state;
  }
}
export const store = createStore(applicationReducer);
store.subscribe(() => {
  console.log(store.getState());
});
