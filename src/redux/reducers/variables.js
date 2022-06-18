import { ADD_USER_DETAILS } from "../constants/ActionTypes";

const initialState = {
  currentUser: {},
};

export default function variables(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_DETAILS:
      state.currentUser = action.payload;
      return state;
    default:
      return state;
  }
}
