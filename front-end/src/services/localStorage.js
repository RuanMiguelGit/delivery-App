export const saveUserInLocalStorage = (user) => {
  const localStorageUser = JSON.stringify(user);
  localStorage.setItem('user', localStorageUser);
};

export const getUserRole = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user[0].role) return user[0].role;
  return 'nothing here';
};

export const getUserToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user[0].token) return user[0].token;
  return '';
};

export const getUserName = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.name) return user.name;
  return '';
};
