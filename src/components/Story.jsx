import React from 'react'

export default function Story({user}) {
  return (
    <div>
        <img src={user.img} alt={user.username} className='h-14 rounded-full p-[1.5px] border-red-500 border-2 cursor-pointer hover:scale-110 transition-transform duration-200 ease-out' />
        <p className="text-xs w-14 truncate">{user.username}</p>
    </div>
  )
}
