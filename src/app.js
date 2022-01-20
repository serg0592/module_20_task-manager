import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import taskFieldTemplate from "./templates/taskField.html";
import noAccessTemplate from "./templates/noAccess.html";
import { User } from "./models/User";
import { generateTestUser } from "./utils";
import { generateTestAdmin } from "./utils";
import { State } from "./state";
import { authUser } from "./services/auth";
import { Admin } from "./models/Admin";

export const appState = new State();

const loginForm = document.querySelector("#app-login-form");

//debugger;

generateTestUser(User);
generateTestAdmin(Admin);

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const login = formData.get("login");
  const password = formData.get("password");

  let fieldHTMLContent = authUser(login, password)
    ? taskFieldTemplate
    : noAccessTemplate;

  document.querySelector("#content").innerHTML = fieldHTMLContent;
});
