import { createStore } from "redux";
// we use redux to manage the state of the entire application and several functions
const applicationIntialState = {
  //save auth state and messages.
  auth: {
    authMessage: {},
    authStatus: {},
    openModal: false,
  },
};
function applicationReducer(state = applicationIntialState, action) {
  switch (action.type) {
    case "updateAuthStatusAndMessage":
      return {
        ...state,
        auth: {
          authMessage: action.message,
          authStatus: action.authStatus,
          openModal: true,
        },
      };
    default:
      return state;
  }
}
export const store = createStore(applicationReducer);
store.subscribe(() => {
  console.log(store.getState());
});
