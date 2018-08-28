import { ADD_FISH } from '../actions/inventory';

const initialState = {
  fish: {}
}

export default (state=initialState, action) => {
  switch (action.type) {
    case ADD_FISH:
      return {
        ...state,
        fish: action.fish
      }
    default:
      return state;
  }
}