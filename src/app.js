import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import taskFieldTemplate from "./templates/taskField.html";
import noAccessTemplate from "./templates/noAccess.html";
import taskFieldAdminTemplate from "./templates/taskFieldAdmin.html";
import { User } from "./models/User";
import { generateAdmin } from "./utils";
import { State } from "./state";
import { authUser } from "./services/auth";
import { addUser } from "./services/addUser";
import { addTask } from "./services/addTask";

export const appState = new State();

const loginForm = document.querySelector(".app-login-form");

//debugger;

generateAdmin(User);

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const login = formData.get("login");
  const password = formData.get("password");

  //debugger;

  if (authUser(login, password) === 'admin') {
    document.querySelector(".content").innerHTML = taskFieldAdminTemplate;
    addUser();
    addTask();
  } else if (authUser(login, password) === true) {
    document.querySelector(".content").innerHTML = taskFieldTemplate;
  } else {
    document.querySelector(".content").innerHTML = noAccessTemplate;
  };
});