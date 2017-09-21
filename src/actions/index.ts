import { ChallengesGetError, ChallengesGetSuccess, ChallengesLoading } from './challenges';

export enum ActionTypeKeys {
  CHALLENGES_GET_ERROR   = 'CHALLENGES_GET_ERROR',
  CHALLENGES_GET_SUCCESS = 'CHALLENGES_GET_SUCCESS',
  CHALLENGES_LOADING     = 'CHALLENGES_LOADING',

  OTHER_ACTION = '__other_action__'
}

export type OtherAction = {
  type: ActionTypeKeys.OTHER_ACTION
};

export type ActionTypes =
  | ChallengesGetError
  | ChallengesGetSuccess
  | ChallengesLoading

  | OtherAction;
