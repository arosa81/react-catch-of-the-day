export const ADD_FISH = 'ADD_FISH';
export const EDIT_FISH = 'EDIT_FISH';
export const DELETE_FISH = 'DELETE_FISH';

export const addFish = fishes => ({
  type: ADD_FISH,
  fishes,
});

export const editFish = fishes => ({
  type: EDIT_FISH,
  fishes,
});

export const deleteFish = fishes => ({
  type: DELETE_FISH,
  fishes,
});
