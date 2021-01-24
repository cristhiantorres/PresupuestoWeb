/* eslint-disable no-useless-escape */
/**
 * Genera formato de moneda.
 * @param {string} str
 */
export const formatMoney = (str) => {
  return 'Gs. ' + Intl.NumberFormat('es-PY').format(str);
};

/**
 * Da formato a la fecha.
 * @param {string} str
 */
export const formatDate = (str) => {
  const d = new Date(str);
  console.log(d.getDay());
  return `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`;
}
