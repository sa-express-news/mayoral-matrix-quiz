import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch(action.type) {
  	case types.GET_CANDIDATES:
  		return state.concat(action.candidates);
    default:
    	return state;
  }
}