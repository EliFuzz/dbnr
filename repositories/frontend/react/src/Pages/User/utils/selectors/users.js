import { pageIndex } from "Pages/User/settings";

export const getUsers = (state, _) => state[pageIndex].users.users;
export const isFetchingUsers = (state, _) => state[pageIndex].users.isLoading;
