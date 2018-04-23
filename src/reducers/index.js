import { combineReducers } from 'redux';
import articleListReducer from './articleListReducer';
import articleDetailReducer from './articleDetailReducer';
import selectedIndexReducer from './selectedIndexReducer';

export default combineReducers({
  articleListReducer,
  articleDetailReducer,
  selectedIndexReducer
});
