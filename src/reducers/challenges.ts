import { CHALLENGES_GET_SUCCESS } from '../actions/challenges';

import { Challenge } from '../types/challenge';

const challenges = (state = [], action: { type: string, challenges: Challenge[] }) => {
  switch (action.type) {
    case CHALLENGES_GET_SUCCESS:
      return [
        ...state,
        action.challenges
      ];
    default:
      return state;
  }
};

export default challenges;
