import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// this is in the action dispatcher category
var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!
  return (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (items) => {
      // action creators are functions that are DISPATCHED to emit a change
      //  do we do something with changeVideoList?
      dispatch(changeVideoList(items));
      //  do we do something with changeVideo?
      dispatch(changeVideo(items[0]));
    });
  };

};

export default handleVideoSearch;
