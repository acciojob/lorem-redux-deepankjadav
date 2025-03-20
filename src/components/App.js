
import React, { useEffect } from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  let dispatch = useDispatch();
  let [loading , data , error] = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchData());
  },[dispatch]);

  if(loading){
    return <p>Loading</p>
  };

  if(error){
    return <p>{error}</p>
  };

  return (
    <div>
        {data ? (
          <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
          </div>
        ) : (null
        )}
    </div>
  );
};

export default App;
