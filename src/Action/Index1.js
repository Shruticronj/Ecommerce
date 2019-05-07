import * as actionType from './ActionType';

export const increment = (item) => ({
    type: actionType.INCREMENT,
    payload: item
});

export const decrement = (item) => ({
    type: actionType.DECREMENT,
    payload: item
});

export const add = (item) => {
    return {
        type: actionType.ADD,
        payload: item
    }
}

export const delData = (item) => {
    return {
        type: actionType.DELETE,
        payload: {
            item
        }
    }
}

export const passingData = (product_data) => {
    return {
        type: actionType.PASSING_DATA,
        payload: product_data
    }
}

export const filterResult = (array) => {
    return {
        type: actionType.FILTER_RESULT,
        payload: array
    }
}

export const filterPrice = (value) => {
    return {
        type: actionType.FILTER_PRICE,
        payload: value
    }
}


