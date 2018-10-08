import { combineReducers } from 'redux';

import fishReducer from './fishReducer';
import orderReducer from './orderReducer';

export default combineReducers({
  fishReducer,
  orderReducer,
});
