import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (name, value, option) => {
  return cookies.set(name, value, { ...option });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.set(name, '', { path: '/', expires: new Date(Date.now()) });
};

export const deleteCookie = (name) => {
  return cookies.remove(name);
};
