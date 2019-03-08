import { 
  FETCHING_SMURFS, 
  FETCHING_SUCCESS, 
  FETCHING_FAILURE, 
  ADDING_SMURF,
  ADDING_SUCCESS,
  ADDING_FAILURE,
  DELETE_SMURF,
  DELETE_SUCCESS,
  DELETE_FAILURE } from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


const smurfReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCHING_SMURFS:
      return {
        ...state,
        error: '',
        fetchingSmurfs: true
      };

    case FETCHING_SUCCESS:
      return {
        ...state,
        error: '',
        fetchingSmurfs: false,
        smurfs: action.payload
      };

    case FETCHING_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    
    case ADDING_SMURF:
      return {
        ...state,
        error: '',
        addingSmurf: true,
      };
    
    case ADDING_SUCCESS:
      return {
        ...state,
        error: '',
        addingSmurf: false,
        smurfs: action.payload
      };

    case ADDING_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      };

    case DELETE_SMURF:
      return {
        ...state,
        error: '',
        deletingSmurf: true,
      };

    case DELETE_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      };

    case DELETE_SUCCESS:
      return {
        ...state,
        error: '',
        deletingSmurf: false,
        smurfs: action.payload
      };

    
    default:
      return state;
  }
};

export default smurfReducer;