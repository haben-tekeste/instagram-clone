"use client";

import React, { useState, useEffect } from "react";
import minifaker from "minifaker";
import "minifaker/locales/en";

import Story from "./Story";

export default function Stories() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setUsers(storyUsers);
    console.log(storyUsers);
  }, []);
  return <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll scrollbar-none rounded-sm ">
    {users && users.map((user) => <Story key={user.id} user={user} />)}
  </div>;
}
