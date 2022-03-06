import React, { useReducer } from 'react';
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import { SET_USER } from "./AppType";

const AppState = (props) => {
    let initialState = {
        user: null
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);


    const setUser = (user) => {
        dispatch({ type: SET_USER, payload: user })
    }

    return (
        <AppContext.Provider
            value={{
                user: state.user,
                setUser,
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;
