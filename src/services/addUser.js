import { User } from "../models/User";

export const addUser = function () {
    const addUserForm = document.querySelector('.app-add-user-form');
    const addUserLog = document.querySelector('.app-add-user-form-log');
    const addUserPas = document.querySelector('.app-add-user-form-pas');
  
    addUserForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
      const formData = new FormData(addUserForm),
            login = formData.get("login"),
            password = formData.get("password");
  
      if (!(login === '') && !(password === '')) {
        const newUser = new User(login, password);
        newUser.storageKey = 'user';
        User.save(newUser);
        addUserLog.value = '';
        addUserPas.value = '';
      } else {
        alert('Задайте логин и пароль');
      };    
    });
  };