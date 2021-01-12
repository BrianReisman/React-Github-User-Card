import React from 'react'

export default function MyCard({data}) {
// console.log(data)

  return (
    <div>
      <div className="meCard">
        <h1><a href={data.html_url}>{data.name}</a></h1>
        <img src={data.avatar_url} alt="smug mug"/>
      </div>
    </div>
  )
}
