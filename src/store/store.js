import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

var configureStore = createStore(
  rootReducer,
  {
    videos: exampleVideoData,
    currentVideo: exampleVideoData[0]
  },
  applyMiddleware(thunk)
);

export default configureStore;