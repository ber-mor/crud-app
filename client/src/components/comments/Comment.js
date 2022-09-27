import React from "react";
import Link from "@mui/material/Link";
import "./comments.css";
import PropTypes from "prop-types";
import EditComment from "./EditComment";
import { updateComment } from "../../data/comments-api";
import { useState } from "react";

export default function Comment({ data, onDeleteComment}) {
  const [comment, setComment] = useState(data) 

  const onEditComment = (newComment) => {
    updateComment(newComment)
    //The comment gets updated here to avoid re-rendering the entire list of comments after the update
    setComment(newComment)
  }

  return (
    <div key={comment.id} className="comment">
      <p className="username"><strong>{comment.username}</strong></p>
      <p className="text">{comment.comment}</p>
      <div id={comment.id} className="action-buttons">
        <EditComment
          data={comment}
          updateComment = {onEditComment}
        />
        <Link
          className="comment-button"
          onClick={() => onDeleteComment(comment.id)}
          color="error"
        >
          Delete
        </Link>
      </div>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.object,
  onDeleteComment: PropTypes.func,
};

Comment.defaultProps = {
  data: {},
  deleteCommentById: () => {},
};
