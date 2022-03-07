import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap
import "./styles/style.css"; //стили
import "./styles/kanban.css"; //стили 
import taskFieldTemplate from "./templates/taskField.html"; //рабочее поле пользователя
import noAccessTemplate from "./templates/noAccess.html"; //надпись "нет доступа"
import taskFieldAdminTemplate from "./templates/taskFieldAdmin.html"; //рабочее поле админа
import { User } from "./models/User"; //класс пользователя
import { generateAdmin } from "./utils"; //функция генератор админа
import { State } from "./state"; //класс статус пользователя
import { authUser } from "./services/auth"; //функция авторизации пользователя
import { addUser } from "./services/addUser"; //функции добавления пользователя
import { addTask } from "./services/addTask"; //функция добавления задания
import { addInProgress } from "./services/addInProgress"; //функция добавления задания в "In Progress"
import { addFinished } from "./services/addFinished"; //фунуция добавления задания в "Finished"

export const appState = new State();

const loginForm = document.querySelector(".app-login-form");

//проверка наличия админа в localStorage
if (!localStorage.getItem("admin")) {
  generateAdmin(User); //генерация админа
};

//отправка формы авторизации
loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); //отключить перезагрузку страницы
  const formData = new FormData(loginForm);
  const login = formData.get("login"); //логин
  const password = formData.get("password"); //пароль

  //проверка соответствия данных формы авторизации
  if (authUser(login, password) === 'admin') { //если админ
    document.querySelector(".container").innerHTML = taskFieldAdminTemplate; //загрузка рабочего поля админа
    //загрузка модулей
    addUser();
    addTask();
    addInProgress();
    addFinished();
  } else if (authUser(login, password) === 'user') { //если пользователь
    document.querySelector(".container").innerHTML = taskFieldTemplate; //загрузка рабочего поля пользователя
  } else {
    document.querySelector(".container").innerHTML = noAccessTemplate; //"нет доступа"
  };
});