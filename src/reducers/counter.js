export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENT_BY':
            return state + parseInt(action.payload);
        case 'DECREMENT_BY':
            return state - parseInt(action.payload);
        default:
            return state;
    }
}