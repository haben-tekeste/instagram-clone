import React from 'react'

export default function Story({user}) {
  return (
    <div>
        <img src={user.img} alt={user.username} />
        <p>{user.username}</p>
    </div>
  )
}
