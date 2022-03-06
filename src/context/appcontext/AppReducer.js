import { SET_USER, RESET_USER } from "./AppType";

export default (state, action) => {
    const { payload, type } = action;
    switch (type) {
        case SET_USER:
            return {
                ...state,
                user: payload
            };

        case RESET_USER:
            return {
                ...state,
                user: null
            };

        default:
            return state;
    }
};