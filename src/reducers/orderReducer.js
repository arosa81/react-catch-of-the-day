import { ADD_ORDER, DELETE_ORDER } from '../actions/orders';

const initialState = {
  orders: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ORDER:
    case DELETE_ORDER:
      return {
        ...state,
        orders: action.order,
      };
    default:
      return state;
  }
};
