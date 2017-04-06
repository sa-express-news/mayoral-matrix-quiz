import * as types from './action-types';

import questions from '../data/questions.json';

const getQuestions = () => {
	return {
    type: types.GET_QUESTIONS,
    questions,
  };
};

export default {
	getQuestions,
}