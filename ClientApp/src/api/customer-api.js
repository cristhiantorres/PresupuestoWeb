import apiInstance from './api-instance';

/**
 * Obtiene el listado de Clientes.
 * */
export const getCustomers = async () => {
  const response = await apiInstance.get(`/customer`);
  const data = await response.data;
  return data;
};
