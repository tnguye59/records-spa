import { Dispatch } from 'redux';

import { ActionTypeKeys } from './index';
import { Challenge } from '../types/challenge';

export type ChallengesGetError = {
  type: ActionTypeKeys.CHALLENGES_GET_ERROR,
  isError: boolean
};

export const challengesGetError = (isError: Boolean) => {
  return {
    type: ActionTypeKeys.CHALLENGES_GET_ERROR,
    isError
  };
};

export type ChallengesGetSuccess = {
  type: ActionTypeKeys.CHALLENGES_GET_SUCCESS,
  challenges: Challenge[]
};

export const challengesGetSuccess = (challenges: Challenge[]) => {
  return {
    type: ActionTypeKeys.CHALLENGES_GET_SUCCESS,
    challenges
  };
};

export type ChallengesLoading = {
  type: ActionTypeKeys.CHALLENGES_LOADING,
  isLoading: boolean
};

export const challengesLoading = (isLoading: Boolean) => {
  return {
    type: ActionTypeKeys.CHALLENGES_LOADING,
    isLoading
  };
};

export const challengesGet = (): Dispatch<{}> => {
  return (dispatch: Dispatch<{}>) => {
    dispatch(challengesLoading(true));

    fetch(`${process.env.REACT_APP_API_URL}/v1/challenges`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(challengesLoading(false));

        return response.json();
      })
      .then((challenges) => dispatch(challengesGetSuccess(challenges)))
      .catch(() => dispatch(challengesGetError(true)));
  };
};
