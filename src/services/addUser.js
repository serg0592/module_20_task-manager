import { User } from "../models/User"; //класс юзера

//функция добавления нового пользователя
export const addUser = function () {
    const addUserForm = document.querySelector('.app-add-user-form'); //форма
    const addUserLog = document.querySelector('.app-add-user-form-log'); //логин формы
    const addUserPas = document.querySelector('.app-add-user-form-pas'); //пароль формы
  
    //отправка формы
    addUserForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
      const formData = new FormData(addUserForm), //класс работы с формой
            login = formData.get("login"),
            password = formData.get("password");
  
      if (!(login === '') && !(password === '')) { //проверка на пустой ввод
        const newUser = new User(login, password); //создать класс юзера
        newUser.storageKey = 'user'; //добавить ключ юзера в хранилище
        User.save(newUser); //сохранить юзера в хранилище
        //очистить поля логина, ПАРОЛЯ
        addUserLog.value = '';
        addUserPas.value = '';
      } else {
        alert('Задайте логин и пароль');
      };    
    });
  };