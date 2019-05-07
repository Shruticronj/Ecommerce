import * as actionType from '../Action/ActionType';

const getInitialState = {
  flag: false,
  cart_arr: [],
  filter_arr: [],
  result_arr: [],
  pdummy: []
}

 const compare = (a, b) => {
  if (a.price < b.price) {
  return -1
  }
  if (a.price > b.price) {
  return 1
  }
  return 0
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

      case actionType.FILTER_PRICE:
      if (action.payload === "Low to High"){
        state.pdummy = [...state.filter_arr.sort(compare)]
      } else if (action.payload === "High to Low"){
        state.pdummy = [...state.filter_arr.sort(compare)];
        state.pdummy = state.pdummy.reverse();
      }
    
      return {
        ...state,
        filter_arr: state.pdummy,
        flag: false
      }
      break;

    default:
      return state;
      break;
  }
}

export default Counter;