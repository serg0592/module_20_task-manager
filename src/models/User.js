import { BaseModel } from "./BaseModel";
import { getFromStorage, addToStorage } from "../utils";

export class User extends BaseModel {
  constructor(login, password) {
    super();
    //debugger;
    this.login = login;
    this.password = password;
    this.storageKey = "users";
  }
  get hasAccess() {
    let users = getFromStorage(this.storageKey),
        lvl = 'admin';
    if (users.length == 0) return false;
    for (let user of users) {
      if (user.login === this.login && user.password === this.password && user.admin) {
        return lvl;
      } else if (user.login === this.login && user.password === this.password && !user.admin) {
        return true;
      }   
    }
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
