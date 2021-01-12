import React from 'react'
import '../MyFollowers.css';

export default function Follower({follower}) {
  console.log(follower)
  return (
    <div className="followerCard">
      <code>Code name: {follower.login}</code>
      <br/>
      <a href={follower.html_url}><img src={follower.avatar_url} alt='less smug mug'/></a>
    </div>
  )
}
