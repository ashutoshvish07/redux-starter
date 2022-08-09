import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getFeedsAPI } from "./../store/feeds/feed.action";

const Home = () => {
  const dispatch = useDispatch();
  const { data, getFeeds } = useSelector((state) => state.feed);
 // console.log("data", data);

  //  if you don't want to call your api again and again just do simple thing
  // 1. check if data.length === 0 then call dispatch method
  // 2. second one is use LocalStorage
  useEffect(() => {
    // let's apply first
    if (data.length === 0) {
      dispatch(getFeedsAPI());
    }
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <br />
      {getFeeds.loading && <div>Loading...</div>}
      {getFeeds.error && <div>error...</div>}
      {!getFeeds.loading &&
        data.map((feed) => (
          <div
            key={feed.id}
            style={{
              padding: "10px",
              margin: "auto",
              marginTop: "10px",
              border: "1px solid grey",
              maxWidth: "200px",
            }}
          >
            <div>{feed.title}</div>
            <div>{feed.description}</div>
          </div>
        ))}
    </div>
  );
};

export default Home;
