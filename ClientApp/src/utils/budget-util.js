/**
 * Obtiene el total
 * @param {string[]} budget
 */
export const getBudgetTotal = (budget) => {
  if (budget.items.length === 0) {
    return 0;
  }
  return budget.items.reduce((prev, curr) => prev + curr.total, 0);
}
