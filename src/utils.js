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

  addUserForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    debugger;
    const formData = new FormData(addUserForm);
    const login = formData.get("login");
    const password = formData.get("password");
    const newUser = new User(login, password);
    User.save(newUser);
  });
};
  