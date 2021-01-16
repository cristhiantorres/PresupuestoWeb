import apiInstance from './api-instance';

/**
 * Obtiene el listado de Clientes.
 * */
export const getCustomers = async (id) => {
  const response = await apiInstance.get(`customer/${id}`);
  const data = await response.data;
  return data;
};
