import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

var initialState = {
  videoList: exampleVideoData,
  currentVideo: exampleVideoData[0]
};
// initialState.videos = exampleVideoData;
// initialState.currentVideo = exampleVideoData[0];

var configureStore = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default configureStore;