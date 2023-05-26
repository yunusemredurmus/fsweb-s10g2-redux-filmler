import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer';

const reducers = combineReducers({
    movieReducer: movieReducer,
    favoriteReducer: favoriteReducer,
  });

  export default reducers