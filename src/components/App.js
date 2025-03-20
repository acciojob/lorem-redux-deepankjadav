
import React, { useEffect } from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/actions.js";

const App = () => {
  let dispatch = useDispatch();
  let { loading, data, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchData());
  },[dispatch]);

  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>Error: {error}</h4>;
  if (!data) return <p>No Data Available</p>;
  
  return (
    <div className="container">
      <h1>A Short Narration of Lorem Ipsum</h1>
      <p>Below Contains a title and Body gotten from a random API, Please take your time to Review</p>
      <div className="grid">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <h3><b>Title:</b> {item.title}</h3>
            <p><b>Body:</b> {item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
