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
  return d.toLocaleString();
}

/**
 * Formato de fecha con nombres de meses.
 * @param {string} str
 */
export const formatDateString = (str) => {
  const date = new Date(str);
  const months = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ];
  return date.getDate() + ' de ' + months[date.getMonth()] + ' de ' + date.getFullYear();
}
