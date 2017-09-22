import { ActionTypeKeys, ActionTypes } from '../actions/index';
import { Challenge } from '../types/challenge';

export type ChallengesState = {
  challenges: Challenge[]
};

const challenges = (state = [], action: ActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.CHALLENGES_GET_SUCCESS:
      return action.challenges;
    default:
      return state;
  }
};

export default challenges;
