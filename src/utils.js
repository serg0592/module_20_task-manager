import { User } from "./models/User";

export const getFromStorage = function (key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

export const addToStorage = function (obj, key) {
  const storageData = getFromStorage(key);
  storageData.push(obj);
  localStorage.setItem(key, JSON.stringify(storageData));
};

export const generateAdmin = function (User) {
  localStorage.clear();
  const admin = new User("admin", "admin");
  admin.admin = true;
  User.save(admin);
};

export const addUser = function () {
  const addUserForm = document.querySelector('#app-add-user-form');
  const addUserLog = document.querySelector('#app-add-user-form-log');
  const addUserPas = document.querySelector('#app-add-user-form-pas');

  addUserForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const formData = new FormData(addUserForm),
          login = formData.get("login"),
          password = formData.get("password");

    if (!(login === '') && !(password === '')) {
      const newUser = new User(login, password);
      User.save(newUser);
      alert('Added');
      addUserLog.value = '';
      addUserPas.value = '';
    } else {
      alert('Задайте логин и пароль');
    };    
  });
};
  