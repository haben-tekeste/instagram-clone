import React from "react";

import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

export default function Post({ username, profile, img, caption, id }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={profile}
          alt={username}
          className="h-12 rounded-full object-cover border p-1 mr-3"
        />
        <p className="font-bold flex-1">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
      {/* Post Image */}
      <img src={img} alt={caption} className="object-cover w-full" />
    </div>
  );
}