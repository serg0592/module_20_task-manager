import { BaseModel } from "./BaseModel";
import { getFromStorage, addToStorage } from "../utils";

export class User extends BaseModel {
  constructor(login, password) {
    super();
    this.login = login;
    this.password = password;
  }

  get hasAccess() {
    let users = getFromStorage("user");
    if (users.length != 0) {
      for (let user of users) {
        if (user.login === this.login && user.password === this.password) {
          this.storageKey = user.storageKey;
          return user.storageKey;
        };
      };
    };

    let admins = getFromStorage("admin");
    if (admins.length != 0) {
      for (let admin of admins) {
        if (admin.login === this.login && admin.password === this.password) {
          this.storageKey = admin.storageKey;
          return admin.storageKey;
        };
      };
    };

    return false;
  }

  static save(user) {
    try {
      addToStorage(user, user.storageKey);
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }
}
