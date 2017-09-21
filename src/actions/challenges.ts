import { Dispatch } from 'redux';

import { Challenge } from '../types/challenge';

export const CHALLENGES_GET_ERROR   = 'CHALLENGES_GET_ERROR';
export const CHALLENGES_GET_SUCCESS = 'CHALLENGES_GET_SUCCESS';
export const CHALLENGES_LOADING     = 'CHALLENGES_LOADING';

export const challengesGetError = (isError: Boolean) => {
  return {
    type: CHALLENGES_GET_ERROR,
    isError: true
  };
};

export const challengesGetSuccess = (challenges: Challenge[]) => {
  console.log(challenges);
  return {
    type: CHALLENGES_GET_SUCCESS,
    challenges
  };
};

export const challengesLoading = (isLoading: Boolean) => {
  return {
    type: CHALLENGES_LOADING,
    isLoading: isLoading
  };
};

export const challengesGet = (): Dispatch<{}> => {
  return (dispatch: Dispatch<{}>) => {
    dispatch(challengesLoading(true));

    fetch('http://localhost:3001/v1/challenges')
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
