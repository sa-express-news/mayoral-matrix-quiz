import { combineReducers } from 'redux';

// Reducers
import questions from './question-reducer';
import candidates from './candidate-reducer';

// Combine Reducers
const reducers = combineReducers({
    questions,
    candidates,
});

export default reducers;