import React, { useState, useEffect } from "react";
import SingleStory from "./SingleStory.js";
import CommentsBlock from "./CommentsBlock.js";
import { get } from "../../utilities";

import "./Card.css";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} content of the story
 * @param {string} userId
 *
 */

const Card = ({ _id, story, userId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    get("/api/comment", { parent: _id }).then((comments) => {
      setComments(comments);
    });
  }, []);

  // this gets called when the user pushes "Submit", so their
  // post gets added to the screen right away
  const addNewComment = (commentObj) => {
    setComments(comments.concat([commentObj]));
  };

  return (
    <div className="Card-container">
      <SingleStory story={story} />
      <CommentsBlock
        // story={props}
        // comments={comments}
        // creator_id={creator_id}
        // userId={userId}
        // addNewComment={addNewComment}
        comments={comments}
        story={story}
        userId={userId}
        addNewComment={addNewComment}
      />
    </div>
  );
};

export default Card;
