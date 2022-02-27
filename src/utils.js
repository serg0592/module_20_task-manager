export const getFromStorage = function (key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

export const addToStorage = function (obj, key) {
  const storageData = getFromStorage(key);
  if ((storageData.length === 0) ||  (storageData === "[]")) {
    storageData.push(obj);
    localStorage.setItem(key, JSON.stringify(storageData));
  }  
};

export const generateAdmin = function (User) {
  const admin = new User("admin", "admin");
  admin.storageKey = "admin";
  User.save(admin);
};  