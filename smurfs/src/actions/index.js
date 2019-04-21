import axios from 'axios';

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

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

export const deleteSmurf = (id) => dispatch => {
  dispatch({type: DELETE_SMURF_START});
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log(res)
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(err.response)
      dispatch({ type: DELETE_SMURF_FAILURE, payload: err.response })
    })
}

