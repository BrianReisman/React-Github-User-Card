import React from 'react'
import { followers } from '../../../data'
import '../MyFollowers.css';

export default function Follower({follower}) {
  console.log(follower)
  return (
    <div className="followerCard">
      <code>Code name: {follower.login}</code>
      <br/>
      <img src={follower.avatar_url} alt='less smug mug'/>
    </div>
  )
}
