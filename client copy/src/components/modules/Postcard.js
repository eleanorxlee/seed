import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import FileBase64 from "react-file-base64";

import "./Postcard.css";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id of the story
 * _id={postObj._id} story={postObj} userId={userId} key={`Postcard_${postObj._id}
 * @param {string} creator_name
 * @param {string} creator_id
 * @param {string} content of the story
 */

const Postcard = ({ _id, post }) => {
    const [url, setUrl] = useState(undefined);

    useEffect(() => {
        get("/api/post", { imageid: post._id }).then(({ file }) => {
          setUrl(file);
        });
    }, []);

    return (
        <div className="Postcard-container">
            <p className="Postcard-postUser">{post.creator_name}</p>
            {url ? <img className="Postcard-image" src={`${atob(url)}`} /> : "No image uploaded!"}
            <p className="Postcard-caption">{post.caption}</p>
            {/* {created_at && <p className="Date">{created_date.toLocaleString()}</p>} */}
        </div>
    );
};

export default Postcard;
