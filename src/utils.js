//загрузка данных по ключу из localStorage
export const getFromStorage = function (key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

//выгрузка данных в localStorage (значение, ключ)
export const addToStorage = function (obj, key) {
  const storageData = getFromStorage(key); //загрузка массива по данному ключу из localStorage
  
  //проверка на наличие данных
  if ((storageData.length === 0) ||  (storageData === "[]")) { //если по данному ключу localStorage пустое, то выгружаем
    storageData.push(obj); //добавить в массив
    localStorage.setItem(key, JSON.stringify(storageData));
  } else { //если по данному ключу не пустое, то перебираем
    let countSaver = storageData.length; //запоминаем длину localStorage по данному ключу
    for (let i = 0; i < countSaver; i++ ) {
      if (storageData[i].login === obj.login) { //если такой логин уже есть
        alert ("Такой логин уже занят, придумайте другой");
        obj = null; //пустой объект
      } else { //если такого логина еще нет
        storageData.push(obj); //добавить в массив
        localStorage.setItem(key, JSON.stringify(storageData));
        alert('Added');
      };
    };
  };
};

//генератор админа
export const generateAdmin = function (User) {
  const admin = new User("admin", "admin");
  admin.storageKey = "admin";
  User.save(admin);
};  