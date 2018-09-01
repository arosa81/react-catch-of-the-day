import { ADD_FISH } from '../actions/inventory';

const initialState = {
  fishes: {}
}

export default (state=initialState, action) => {
  switch (action.type) {
    case ADD_FISH:
      console.log("action: ", action);
      return {
        ...state,
        fishes: {
          ...state.fishes,
          ...action.fishes
        }
      }
    default:
      return state;
  }
}