import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESSFUL = 'FETCHING_DATA_SUCCESSFUL';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCHING_DATA_START});
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({type: FETCHING_DATA_SUCCESSFUL, payload: res.data})
    })
    .catch(err => {
      dispatch({type: FETCHING_DATA_FAILURE, payload: err.response})
    })
}


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
