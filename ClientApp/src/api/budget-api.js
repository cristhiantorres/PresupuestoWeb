import apiInstance from './api-instance';

/**
 * Obtiene el listado de Clientes.
 * */
export const addBudget = async (budget) => {
  const response = await apiInstance.post(`/budget`, budget);
  const data = await response.data;
  return data;
};
