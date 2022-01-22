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