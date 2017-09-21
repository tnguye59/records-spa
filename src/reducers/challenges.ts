import { ActionTypeKeys, ActionTypes } from '../actions/index';

const challenges = (state = [], action: ActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.CHALLENGES_GET_SUCCESS:
      return [
        ...state,
        action.challenges
      ];
    default:
      return state;
  }
};

export default challenges;
