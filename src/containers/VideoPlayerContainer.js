import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

export default connect(mapStateToProps, null)(VideoPlayer);
