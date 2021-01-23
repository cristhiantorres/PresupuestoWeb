import apiInstance from './api-instance';

/**
 * Obtiene el listado de Clientes.
 * */
export const getProducts = async () => {
  const response = await apiInstance.get(`/product`);
  const data = await response.data;
  return data;
};
