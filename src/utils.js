//загрузка данных по ключу из localStorage
export const getFromStorage = function (key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

//выгрузка данных в localStorage (значение, ключ)
export const addToStorage = function (obj, key) {
  const storageData = getFromStorage(key); //загрузка по данному ключу из localStorage
  
  //проверка на наличие данных
  if ((storageData.length === 0) ||  (storageData === "[]")) { //если localStorage пустое, то выгружаем
    storageData.push(obj);
    localStorage.setItem(key, JSON.stringify(storageData));
  } else { //если не пустое, то перебираем
    let countSaver = storageData.length; //запоминаем длину localStorage
    for (let i = 0; i < countSaver; i++ ) {
      if (storageData[i].login === obj.login) { //если такой логин уже есть
        alert ("Такой логин уже занят, придумайте другой");
        obj = null; //удаляем значение
      } else { //если такого логина еще нет
        storageData.push(obj);
        localStorage.setItem(key, JSON.stringify(storageData));
        alert('Added');
      };
    };
  };
};

export const generateAdmin = function (User) {
  const admin = new User("admin", "admin");
  admin.storageKey = "admin";
  User.save(admin);
};  