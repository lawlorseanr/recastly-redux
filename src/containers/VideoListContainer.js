import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (type) => dispatch({ type })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
