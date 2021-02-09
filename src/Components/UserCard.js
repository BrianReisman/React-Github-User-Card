import React from 'react';

const UserCard = ({userData}) => {
  console.log(userData)
  return(
    <div>
      <h1>{userData.name}</h1>
      <p>has {userData.public_repos} public repos which is pretty badass if you ask me! His follwers/following ratio is {userData.followers/userData.following} which is pretty typical for someone at his stage.</p>
      <code>To learn more visit his <a href={userData.html_url}>github page</a>.</code>
    </div>
)
};

export default UserCard;
