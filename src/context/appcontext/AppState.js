import React, { useReducer } from 'react';
import AppReducer from "./AppReducer";
import AppContext from "./AppContext";
import { SET_USER, RESET_USER } from "./AppType";

const AppState = (props) => {
    let initialState = {
        user: sessionStorage.getItem("user") ? JSON.parse(sessionStorage.getItem("user")) : null
    }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    const setUser = (user) => {
        sessionStorage.setItem("user", JSON.stringify(user));
        dispatch({ type: SET_USER, payload: user })
    }

    const resetUser = () => {
        sessionStorage.removeItem("user");
        dispatch({ type: RESET_USER })
    }

    return (
        <AppContext.Provider
            value={{
                user: state.user,
                setUser,
                resetUser
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;
