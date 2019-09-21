import {
  SHOW_ALL_REQUEST,
  SHOW_ALL_SUCCESS,
  SHOW_ALL_FAILURE
} from "Pages/User/utils/actionTypes/showUsers";

const INITIAL_STATE = {
  users: [],
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_ALL_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SHOW_ALL_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        isLoading: false
      };
    case SHOW_ALL_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
