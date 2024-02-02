import React from "react";
import { Link } from "react-router-dom";

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} content of the story
 */

const SingleStory = ({ story, showCreatorName = true }) => {
  const { _id, creator_name, creator_id, content, created_at } = story;
  // const created_date = new Date(created_at); // passing epoch timestamp
  const created_date = new Date(parseInt(created_at, 10));
  // console.log(created_at);
  return (
    <div className="Card-story">
      <p className="Card-storyUser">{showCreatorName && creator_name}</p>
      <p className="Card-storyContent">{content}</p>
      {created_at && <p className="Date">{created_date.toLocaleString()}</p>}
    </div>
  );
};

export default SingleStory;
