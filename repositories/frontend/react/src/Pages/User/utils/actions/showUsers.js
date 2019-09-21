import {
  SHOW_ALL_REQUEST,
  SHOW_ALL_SUCCESS,
  SHOW_ALL_FAILURE
} from "Pages/User/utils/actionTypes/showUsers";

export const request = () => ({
  type: SHOW_ALL_REQUEST
});

export const success = users => ({
  type: SHOW_ALL_SUCCESS,
  payload: { users }
});

export const failure = () => ({
  type: SHOW_ALL_FAILURE
});
