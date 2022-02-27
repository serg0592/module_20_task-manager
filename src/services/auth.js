import { appState } from "../app";
import { User } from "../models/User";

export const authUser = function (login, password) {
  const user = new User(login, password);
  if (user.hasAccess === 'admin') {
    let admin = user;
    appState.currentUser = admin;
    return admin.storageKey;
  } else if (!user.hasAccess) {
    return false;
  } else {
    appState.currentUser = user;
    return user.storageKey;
  };
};
