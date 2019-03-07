import { ADD_FISH, EDIT_FISH, DELETE_FISH } from '../actions/inventory';

const initialState = {
  fishes: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_FISH:
    case EDIT_FISH:
      return {
        ...state,
        fishes: {
          ...state.fishes,
          ...action.fishes,
        },
      };
    case DELETE_FISH:
      console.log('action: ', action, state);
      console.log(
        'actionssss: ',
        Object.keys(state.fishes), // .filter(fish => fish.fishID !== action.fishes),
        {
          fishes: {
            ...state.fishes,
            ...action.fishes,
          },
        }
      );
      return {
        ...state,
        fishes: {
          ...state.fishes,
        },
      };
    default:
      return state;
  }
};
