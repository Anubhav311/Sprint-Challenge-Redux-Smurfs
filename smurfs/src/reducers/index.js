import { FETCHING_DATA_START, FETCHING_DATA_SUCCESSFUL, FETCHING_DATA_FAILURE } from '../actions/index';

const initialstate =  {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

function reducer(state = initialstate, action) {
  switch (action.type) {
    case FETCHING_DATA_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
    case FETCHING_DATA_SUCCESSFUL:
    return {
      ...state,
      smurfs: action.payload,
      fetchingSmurfs: false,
      error: null
    }
    default: 
    return state;
  }
}

export default reducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
