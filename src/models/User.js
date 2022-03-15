import { BaseModel } from "./BaseModel"; //класс с генератором случайного id
import { getFromStorage, addToStorage } from "../utils"; //функции работы с localStorage

//класс пользоваиеля
export class User extends BaseModel {
  constructor(login, password) {
    super();
    this.login = login;
    this.password = password;
  }

  //проверка наличия доступа
  get hasAccess() {
    //проверка пользователя
    let users = getFromStorage("user");
    if (users.length != 0) { //если есть записи в localStorage
      for (let user of users) { //ищем совпадение логина, пароля
        if (user.login === this.login && user.password === this.password) {
          this.storageKey = user.storageKey;
          return user.storageKey; //возвращаем подходящего пользователя
        };
      };
    };

    //проверка админа
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

  //сохранить в localStorage
  static save(user) {
    try {
      addToStorage(user, user.storageKey);
      return true;
    } catch (e) {
      throw new Error(e);
    }
  }
}