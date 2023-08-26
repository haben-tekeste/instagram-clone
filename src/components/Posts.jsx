import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: 1,
      username: "Post 1",
      userImg:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 2,
      username: "Post 2",
      userImg:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      id: 3,
      username: "Post 3",
      userImg:
        "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      img: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      caption: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  return (
    <div>
      {posts?.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          profile={post.userImg}
          img={post.img}
          caption={post.caption}
          id={post.id}
        />
      ))}
    </div>
  );
}
