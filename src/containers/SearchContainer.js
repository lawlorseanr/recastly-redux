import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

/*
1. wires this component to the redux store (taking advantage of the provider)
2. provides a way for user to map pieces of state in redux store to the props object
3. provide dispatch to functions that you can then put in the props object,
   and pass into that component to interact with redux store
*/

const mapStateToProps = (state) => {
  // this object will become part of the props that will be passed into component
  return {
    // don't want to make a whole lot of changes to react application
    value: state.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // come up with a way to replace the updateCounter logic on app.js
    handleSearchInputChange: (type) => dispatch({ type })
  };
};


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

// these are both functions, designed to return an object
export default connect(mapStateToProps, mapDispatchToProps)(Search);
