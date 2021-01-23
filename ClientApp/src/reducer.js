import { addToBudget, changeItemQuantity, removeItem, setCustomer } from "./actions/budget-action";

export const ADD_TO_BUDGET = 'ADD_TO_BUDGET';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CHANGE_ITEM_QUANTITY = 'CHANGE_ITEM_QUANTITY';
export const SET_CUSTOMER = 'SET_CUSTOMER';

export const initialState = {
  budget: JSON.parse(window.localStorage.getItem('budget')) || {
    customer: null,
    items: [],
  },
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BUDGET: {
      return addToBudget(action, state);
    }
    case REMOVE_ITEM: {
      return removeItem(action, state);
    }
    case CHANGE_ITEM_QUANTITY: {
      return changeItemQuantity(action, state);
    }
    case SET_CUSTOMER: {
      return setCustomer(action, state);
    }
    default:
      return state;
  }
}

export default reducer;
