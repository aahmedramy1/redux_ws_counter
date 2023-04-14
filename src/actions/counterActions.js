export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const incrementBy = (amount) => {
    return {
        type: 'INCREMENT_BY',
        payload: amount
    }
}

export const decrementBy = (amount) => {
    return {
        type: 'DECREMENT_BY',
        payload: amount
    }
}