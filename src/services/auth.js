import { appState } from "../app"; //класс статуса
import { User } from "../models/User"; //класс юзера

//функция авторизации
export const authUser = function (login, password) {
  const user = new User(login, password); //создать объект пользователя
  if (user.hasAccess === 'admin') { //если доступ администратора
    let admin = user; //присвоить объект пользователя
    appState.currentUser = admin; //статус приложения: текущий пользователь - админ
    return admin.storageKey; //вернуть ключ админа в хранилище
  } else if (!user.hasAccess) { //если нет доступа
    return false;
  } else {
    appState.currentUser = user; //иначе статус приложения: текущий пользователь - юзер
    return user.storageKey; //вернуть ключ юзера в хранилище
  };
};
