import moment from 'moment';

/**
 * Setea usuario autenticado.
 * @param {string[]} action
 * @param {string[]} state
 */
export const setUser = (action, state) => {
  state = { ...state, user: action.item };
  document.cookie = `token=${JSON.stringify(state.user)}; expires=${moment()
    .add(30, 'minutes')
    .fromNow()}; path=/`;
  return state;
};
