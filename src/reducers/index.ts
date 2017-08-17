import { combineReducers } from 'redux';

import recordBooks from './recordBooks';

const appReducers = combineReducers({
  recordBooks
});

export default appReducers;
