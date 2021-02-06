/**
 * Retorna usuario guardado en la cookies.
 */
export const isAuth = () => {
  let token = getUserToken();
  return token ? true : false;
};

/**
 * Retorna usuario guardado en la cookies.
 */
export const getUserToken = () => {
  let token = getCookie('token');
  if (token === undefined) {
    return false;
  }
  return token;
};

/**
 * Retorna el valor de una cookie por nombre.
 * @param {string} name
 */
export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift().replace(/['"]+/g, '');
};

