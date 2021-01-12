import React from 'react'
import Follower from './Follower/Follower';

export default function MyFollowers({followers}) {
  // console.log(followers)

  return (
    <div>
      <h1>Fools with no taste when choosing who to follow</h1>
      {
        followers.map(follower => {
          return <Follower follower={follower}/>
        })
      }
    </div>
  )
}
