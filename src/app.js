import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import "./styles/kanban.css";
import taskFieldTemplate from "./templates/taskField.html";
import noAccessTemplate from "./templates/noAccess.html";
import taskFieldAdminTemplate from "./templates/taskFieldAdmin.html";
import { User } from "./models/User";
import { generateAdmin } from "./utils";
import { State } from "./state";
import { authUser } from "./services/auth";
import { addUser } from "./services/addUser";
import { addTask } from "./services/addTask";
import { addInProgress } from "./services/addInProgress";
import { addFinished } from "./services/addFinished";

export const appState = new State();

const loginForm = document.querySelector(".app-login-form");

generateAdmin(User);

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const login = formData.get("login");
  const password = formData.get("password");

  if (authUser(login, password) === 'admin') {
    document.querySelector(".container").innerHTML = taskFieldAdminTemplate;
    addUser();
    addTask();
    addInProgress();
    addFinished();
  } else if (authUser(login, password) === 'user') {
    document.querySelector(".container").innerHTML = taskFieldTemplate;
  } else {
    document.querySelector(".container").innerHTML = noAccessTemplate;
  };
});