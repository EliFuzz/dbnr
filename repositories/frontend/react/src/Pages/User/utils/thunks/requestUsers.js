import { getUsers } from "Pages/User/utils/api/users";
import { failure, request, success } from "Pages/User/utils/actions/showUsers";

export const requestUsers = amount => async dispatch => {
  try {
    dispatch(request());
    const { users } = await getUsers();
    dispatch(success(users));
  } catch (e) {
    dispatch(failure());
  }
};
