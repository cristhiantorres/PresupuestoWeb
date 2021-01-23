import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext();
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);

StateProvider.propTypes = {
  children: PropTypes.element.isRequired,
  reducer: PropTypes.func,
  initialState: PropTypes.func,
};
