export const ADD_ORDER = 'ADD_ORDER';
export const DELETE_ORDER = 'DELETE_ORDER';

export const addOrder = order => ({
  type: ADD_ORDER,
  order,
});

export const deleteOrder = order => ({
  type: DELETE_ORDER,
  order,
});
