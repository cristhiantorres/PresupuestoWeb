import apiInstance from './api-instance';

/**
 * Obtiene el listado de Clientes.
 * */
export const getBudgetAll = async () => {
  const response = await apiInstance.get(`/budget`);
  const data = await response.data;
  return data;
};

/**
 * Obtiene el listado de Clientes.
 * */
export const addBudget = async (budget) => {
  const response = await apiInstance.post(`/budget`, budget);
  const data = await response.data;
  return data;
};

/**
 * Obtiene presupuesto por id.
 * @param {number} id
 */
export const getBudgetById = async (id) => {
  const response = await apiInstance.get(`/budget/${id}`);
  const data = await response.data;
  return data;
};
