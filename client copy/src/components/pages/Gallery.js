import React, { useState, useEffect, useLayoutEffect } from "react";
import { get, post } from "../../utilities";

import "../../utilities.css";
import "./Gallery.css";
import Postcard from "../modules/Postcard";
import leaf_2 from "../../public/leaf-2.png";
import plants_1 from "../../public/plants-1.png";

const Gallery = ({ userId, setShowNavBar }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    /*get("/api/stories").then((newStories) => {
      console.log(newStories);
      setStories(newStories);
    });*/
    document.title = "SEED";
    get("/api/posts").then((postObjs) => {
      let reversedPostObjs = postObjs.reverse();
      setPosts(reversedPostObjs);
    });
  }, []);

  let postsList = null;
  const hasPosts = posts.length !== 0;
  if (hasPosts) {
    postsList = posts.map((postObj) => (
      <Postcard _id={postObj._id} post={postObj} userId={userId} key={`Postcard_${postObj._id}`} />
    ));
  } else {
    postsList = <div>Loading...</div>;
  }

  // const { _id, creator_name, creator_id, content, created_at } = story;

  // useEffect(() => {
  //   if (user?.profilepicid) {
  //     get("/api/file", { imageid: user.profilepicid }).then(({ file }) => {
  //       setUrl(file);
  //     });
  //   }
  // }, [user]);
  

  return (
    <div>
      <div className="gallery-container u-textCenter">
        {postsList}
      </div>
    </div>
  );
};

export default Gallery;

// store in array -> bookmarks; feed id in each post ->> post they like
// id of the user ; query
// find all bookmarks for those ids; for THAT user
// each array is tailored for each user

//add a new bookmark -> get request to that array; entry to that array; then post request; save every time
