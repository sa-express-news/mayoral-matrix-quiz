import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch(action.type) {
  	case types.GET_QUESTIONS:
  		return state.concat(action.questions);
    default:
    	return state;
  }
}