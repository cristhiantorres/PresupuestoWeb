import apiInstance from './api-instance';

/**
 * Realiza la autenticacion.
 * */
export const login = async (username, password) => {
  const response = await apiInstance.post(`/auth/login`, { username, password });
  const data = await response.data;
  return data;
};
