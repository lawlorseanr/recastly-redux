import React from 'react';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import VideoListContainer from '../containers/VideoListContainer';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import SearchContainer from '../containers/SearchContainer';

var App = () => {
  //TODO: swap out the React components below for the container components
  //  you wrote in the 'containers' directory.
  // render() {
  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <SearchContainer />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayerContainer />
        </div>
        <div className="col-md-5">
          <VideoListContainer />
        </div>
      </div>
    </div>
  );
  // }
  // }
};

export default App;
