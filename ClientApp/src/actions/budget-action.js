/**
 * Agregar un item al presupuesto.
 * @param {string[]} action
 * @param {string[]} state
 */
export const addToBudget = (action, state) => {
  let item = action.item;
  let items = [...state.budget.items];
  let budget = { ...state.budget };
  const elementIndex = items.findIndex((value) => value.id === item.id);

  if (elementIndex >= 0) {
    items[elementIndex] = {
      ...items[elementIndex],
      quantity: parseInt(items[elementIndex].quantity) + parseInt(item.quantity),
      total: items[elementIndex].price * (parseInt(items[elementIndex].quantity) + parseInt(item.quantity)),
    };
    budget = { ...budget, items: items };
    state = { ...state, budget: budget };
  } else {
    budget = { ...budget, items: [...state.budget.items, item] };
    state = { ...state, budget: budget }
  }
  // Se guarda en local storage
  window.localStorage.setItem('budget', JSON.stringify(state.budget));
  return state;
}

/**
 * Elimina un item del presupuesto.
 * @param {string[]} action
 * @param {string[]} state
 */
export const removeItem = (action, state) => {
  const items = state.budget.items.filter((value) => value.id !== action.item);
  const budget = { ...state.budget, items: items };
  state = { ...state, budget: budget };
  window.localStorage.setItem('budget', JSON.stringify(state.budget));
  return state;
}

/**
 * Modifica la cantidad del item
 * @param {string[]} action
 * @param {string[]} state
 */
export const changeItemQuantity = (action, state) => {
  const item = action.item;
  let budget = { ...state.budget };
  const elementIndex = budget.items.findIndex((value) => value.id === item.id);
  let items = [...state.budget.items];
  if (elementIndex >= 0) {
    items[elementIndex] = {
      ...items[elementIndex],
      quantity: item.quantity,
    };
  }
  budget = { ...state.budget, items: items };
  state = { ...state, budget: budget };
  window.localStorage.setItem('budget', JSON.stringify(state.budget));
  return state;
}

/**
 * Agregamos cliente al presupuesto.
 * @param {string[]} action
 * @param {string[]} state
 */
export const setCustomer = (action, state) => {
  const budget = { ...state.budget, customer: action.item };
  state = { ...state, budget: budget };
  window.localStorage.setItem('budget', JSON.stringify(state.budget));
  return state;
}

/**
 * Limpiamos el presupuesto.
 * @param {string[]} action
 * @param {string[]} state
 */
export const clearBudget = (action, state) => {
  const budget = {
    customer: null,
    items: [],
  };

  state = { ...state, budget: budget };
  window.localStorage.setItem('budget', JSON.stringify(state.budget));
  return state;
}
