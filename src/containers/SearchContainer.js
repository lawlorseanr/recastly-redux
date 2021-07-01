import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

// const mapStateToProps = (state) => {
//   // this object will become part of the props that will be passed into component
//   return {
//     // don't want to make a whole lot of changes to react application
//     value: state.value
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    // come up with a way to replace the updateCounter logic on app.js
    handleSearchInputChange: (query) => dispatch(handleSearchChange(query)),
  };
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

// these are both functions, designed to return an object
export default connect(null, mapDispatchToProps)(Search);