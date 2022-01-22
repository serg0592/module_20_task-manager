import { appState } from "../app";
import { User } from "../models/User";

export const authUser = function (login, password) {
  const user = new User(login, password),
        lvl = 'admin';
  if (user.hasAccess === 'admin') {
    appState.currentUser = user;
    return lvl;
  } else if (!user.hasAccess) {
    return false;
  } else {
    appState.currentUser = user;
    return true;
  };
};
