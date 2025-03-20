export const fetchDataRequest = () => ({type: 'FETCH_DATA_REQUEST'});
export const fetchDataSuccess = (data => ({type: 'FETCH_DATA_SUCCESS', payload: data}));
export const fetchDataFailure = (error) => ({type: 'FETCH_DATA_FAILURE', payload: error});

// redux/actions.js
export const fetchData = () => async (dispatch) => {
    dispatch({ type: 'FETCH_DATA_REQUEST' });
  
    try {
      let response = await fetch('https://api.lorem.com/ipsum');
      let data = await response.json();
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_DATA_FAILURE', error: error.message });
    }
  };
  