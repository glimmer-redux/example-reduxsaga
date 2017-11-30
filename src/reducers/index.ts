import { combineReducers } from 'redux';

const initialState = {
  number: 0,
  loading: false
}

var saga = ((state, action) => {
  if(action.type === 'LOADING') {
    return {
      ...state,
      loading: true
    }
  }
  if(action.type === 'SAGA_ACTION') {
    var number = state.number + 1;
    return {
      ...state,
      loading: false,
      number: number
    }
  }
  return state || initialState;
});

export default combineReducers({
  saga
});
