"use client";

import React, { useState, useEffect } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";

export default function Suggestions() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const suggestedUsers = minifaker.array(6, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      title: minifaker.jobTitle(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setUsers(suggestedUsers);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>
      {users?.map((user) => (
        <div key={user.id} className="flex items-center justify-between mt-3">
          <img
            src={user.img}
            alt={user.username}
            className="h-10 rounded-full border p-[2px]"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{user.username}</h2>
            <h3 className="text-sm text-gray-400 truncate w-[230px]">{user.title}</h3>
          </div>
          <button className="font-semibold text-blue-400 text-sm">follow</button>
        </div>
      ))}
    </div>
  );
}
