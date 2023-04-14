export const authentication = (state = {
    isUserLoggedIn: false,

}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isUserLoggedIn: true,
            }
        case 'LOGOUT':
            return {
                ...state,
                isUserLoggedIn: false,
            }
    default:
        return state;
    }

}