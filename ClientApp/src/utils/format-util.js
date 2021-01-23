/* eslint-disable no-useless-escape */
/**
 * Genera formato de moneda.
 * @param {string} str
 */
export const formatMoney = (str) => {
  return 'Gs. ' + Intl.NumberFormat('es-PY').format(str);
};
