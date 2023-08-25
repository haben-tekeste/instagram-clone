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
  return <div>
    {users && users.map((user) => <Story key={user.id} user={user} />)}
  </div>;
}
