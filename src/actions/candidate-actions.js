import * as types from './action-types';

import candidates from '../data/candidates.json';

const getCandidates = () => {
	return {
    type: types.GET_CANDIDATES,
    candidates,
  };
};

export default {
	getCandidates,
}