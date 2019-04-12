import axios from 'axios';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESSFUL = 'FETCHING_DATA_SUCCESSFUL';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCHING_DATA_START});
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({ type: FETCHING_DATA_SUCCESSFUL, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCHING_DATA_FAILURE, payload: err.response })
    })
}


export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const addSmurf = (smurf) => dispatch => {
  dispatch({type: ADD_SMURF_START});
  axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {
      console.log(res)
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: ADD_SMURF_FAILURE, payload: err.response })
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

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getSmurfs }, dispatch)
// }

// export default connect(
//   null, mapDispatchToProps
// )(getSmurfs)