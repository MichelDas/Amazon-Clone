// setup data layer

import { createContext, useContext, useReducer } from "react";

// we need this to  track the basket

//THIS IS THE DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

// This is how we use it inside component
export const useStateValue = () => useContext(StateContext);