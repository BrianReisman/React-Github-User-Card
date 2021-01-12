import React from "react";
import Follower from "./Follower/Follower";
import "./MyFollowers.css";

export default function MyFollowers({ followers }) {
  // console.log(followers)

  return (
    <>
      {" "}
      <h3><span id='strike'>Fools</span> People with <span id="strike">no</span> great taste when choosing who to follow</h3>
      <div className="followersCard">
        {followers.map((follower) => {
          return <Follower follower={follower} />;
        })}
      </div>
    </>
  );
}
