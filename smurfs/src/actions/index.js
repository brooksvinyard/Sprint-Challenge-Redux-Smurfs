import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDING_SUCCESS = 'ADDING_SUCCESS';
export const ADDING_FAILURE = 'ADDING_FAILURE';

export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';


export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res)
        dispatch({ 
            type: FETCHING_SUCCESS, 
            payload: res.data 
        });
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: FETCHING_FAILURE,
            payload: err.response
      });
    });
};

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        console.log(res)
        dispatch({ 
            type: ADDING_SUCCESS, 
            payload: res.data 
        });
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: ADDING_FAILURE,
            payload: err.response
      });
    });
};

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETE_SMURF });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
        console.log(res)
        dispatch({ 
            type: DELETE_SUCCESS, 
            payload: res.data 
        });
    })
    .catch(err => {
        console.log(err)
        dispatch({
            type: DELETE_FAILURE,
            payload: err.response
      });
    });
};