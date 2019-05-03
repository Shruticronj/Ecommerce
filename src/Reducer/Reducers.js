import * as actionType from '../Action/ActionType';

const getInitialState = {
  flag: false,
  cart_arr: [],
  filter_arr: [],
  result_arr: []
}

export const Counter = (state = getInitialState, action) => {

  switch (action.type) {

    case actionType.INCREMENT:
      let newArray = [...state.cart_arr]
      newArray = newArray.map(item => {
        if (item.name === action.payload.name) {
          item.count += 1;
        }
        return item
      })
      return {
        ...state,
        flag: true,
        cart_arr: newArray
      }
      break;

    case actionType.DECREMENT:
      let newArray1 = [...state.cart_arr]
      newArray1 = newArray1.map(item => {
        if (item.name === action.payload.name) {
          item.count -= 1;
        }
        return item
      })
      return {
        ...state,
        flag: true,
        cart_arr: newArray1
      }
      break;

    case actionType.ADD:
      const data = action.payload;
      data.count = 1;
      return {
        ...state,
        cart_arr: [...state.cart_arr, data],
        flag: false,
      }
      break;

    case actionType.DELETE:
      return {
        ...state,
        cart_arr: state.cart_arr.filter(i => i.name !== action.payload.item.name),
        flag: true
      }
      break;

    case actionType.PASSING_DATA:
      return {
        ...state,
        filter_arr: action.payload,
        result_arr: action.payload,
        flag: false
      }
      break;

    case actionType.FILTER_RESULT:
      let dummy = ''
      if (action.payload.length > 0) {
        dummy = state.result_arr.filter(prod => {
          for (let i = 0; i < action.payload.length; i++) {
            if (prod.brand === action.payload[i]) {
              return prod
            }
          }
        })
      } else {
        dummy = [...state.result_arr];
      }
      return {
        ...state,
        filter_arr: dummy,
        flag: false
      }
      break;

      case actionType.LOW_TO_HIGH:
      return {
        ...state,
        filter_arr: state.result_arr.sort,
        flag: false
      }
      break;

      case actionType.HIGH_TO_LOW:
      return {
        ...state,
        filter_arr: state.result_arr,
        flag: false
      }
      break;

    default:
      return state;
      break;
  }
}

export default Counter;