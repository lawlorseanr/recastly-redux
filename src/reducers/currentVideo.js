/* eslint-disable indent */
import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  console.log('action: ', action);
  switch (action.type) {
    case 'CHANGE_VIDEO':
      return action.video;
    default:
      return state;
  }

};

export default currentVideoReducer;
