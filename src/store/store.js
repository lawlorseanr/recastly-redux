import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

var configureStore = createStore(
  rootReducer,
  exampleVideoData,
  applyMiddleware(thunk)
);

export default configureStore;